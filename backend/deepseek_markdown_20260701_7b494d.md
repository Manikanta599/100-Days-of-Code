# Backend Interview Prep: Node.js, NestJS, MySQL, Redis & AWS

**Target:** 10+ LPA | **Experience Level:** 2+ Years (SDE-1 / SDE-2)
**Goal:** Focus on "Under the Hood" mechanics, Production Scaling, and Failure Handling.

---

## 1. Node.js (Runtime & Concurrency)

### Core Concepts to Master
- **Event Loop:** Understand the 6 phases (Timers -> Pending Callbacks -> Idle/Prepare -> Poll -> Check -> Close). 
- **Microtasks vs Macrotasks:** `process.nextTick()` vs `setImmediate()` vs `setTimeout()`.
- **Clustering:** Why use `cluster` module? How does it share the port? (Master distributes connections to workers).
- **Memory Leaks:** Causes (global variables, large objects, closures, detached DOM nodes in SSR, improper timer cleanup).
- **Streams:** Backpressure handling (`.pipe()` vs `pipeline()`).

### Must-Know Questions
1. **"Your API is suddenly using 100% CPU. How do you debug it?"**
   - *Hint:* Take a Heap Snapshot, look for synchronous CPU-intensive tasks blocking the event loop. Use `worker_threads` for offloading.
2. **"What is the difference between `throw new Error()` and `process.nextTick(() => throw err)`?"**
   - *Hint:* The former is synchronous and will be caught by try-catch; the latter exits the current execution and throws in the next tick, crashing the process if unhandled.
3. **"How do you gracefully shut down a Node.js server without dropping active requests?"**
   - *Hint:* Listen for `SIGTERM`, call `server.close()` to stop accepting new requests, wait for existing requests to finish, then exit.
4. **"Explain Event Loop starvation. How do you fix it?"**
   - *Hint:* Long-running `for` loops. Break into chunks using `setImmediate()` or `setTimeout(..., 0)` to yield control back to the event loop.

---

## 2. NestJS (Framework Architecture)

### Core Concepts to Master
- **Dependency Injection (DI):** Inversion of Control (IoC) container. How `@Injectable()` works.
- **Execution Context:** Middleware -> Guards -> Interceptors (before) -> Pipes -> Controllers/Handlers -> Interceptors (after) -> Exception Filters.
- **Custom Decorators:** Creating `@User()` to extract user from request.
- **Lifecycle Hooks:** `OnModuleInit`, `OnApplicationBootstrap`, `OnModuleDestroy` (crucial for closing DB connections).

### Must-Know Questions
1. **"Difference between an Interceptor and a Middleware in NestJS?"**
   - *Hint:* Interceptors have access to the RxJS `Observable` (response stream) and can transform the response; Middleware is simpler and doesn't have access to the response stream *after* the handler executes.
2. **"You have a circular dependency between Module A and Module B. How do you resolve it?"**
   - *Hint:* Use `forwardRef(() => ModuleB)` or restructure to extract shared logic into a common Module.
3. **"How does NestJS handle exceptions globally?"**
   - *Hint:* `@UseFilters(new HttpExceptionFilter())` or a Global Filter. It catches everything, maps it to a standard error JSON structure.
4. **"Why is `@nestjs/bull` useful?"**
   - *Hint:* Abstraction over Bull (Redis). Provides decorators `@Processor()`, `@Process()`, and `@InjectQueue()` for easy job scheduling and handling.

---

## 3. MySQL (Database Design & Performance)

### Core Concepts to Master
- **Indexing:** B-Tree vs Hash. Composite Indexes (Leftmost Prefix Rule). Covering Indexes.
- **Isolation Levels:** Focus on **Read Committed** (default in many) vs **Repeatable Read** (MySQL default). Know the difference regarding "Non-Repeatable Reads" and "Phantom Reads".
- **EXPLAIN:** Analyze `type` (ALL, index, range, ref, eq_ref, const), `rows`, `Extra` (Using filesort, Using index condition).
- **Locking:** Row-level locks (`SELECT ... FOR UPDATE`), Table-level locks. How to avoid deadlocks (consistent order of UPDATE queries).
- **Master-Slave Replication:** Binary Log (binlog) format (Statement vs Row vs Mixed). Replication Lag.

### Must-Know Questions
1. **"You have a query that fetches 1 million rows. The offset is 900,000. It's slow. How do you fix it?"**
   - *Hint:* OFFSET scans all previous rows. Replace with **Cursor-based Pagination**: `WHERE id > last_id ORDER BY id LIMIT 100` (if sequential) or use a "Deferred Join" (join on a subquery that only fetches the primary keys).
2. **"What is a deadlock, and how does MySQL resolve it?"**
   - *Hint:* InnoDB detects circular wait and rolls back the transaction that holds fewer row locks (or the one that updated fewer rows). 
3. **"You added an index, but the query is still slow. Why?"**
   - *Hint:* The index might not be selective enough. Or the query is doing `LIKE '%text'` (leading wildcard breaks B-Tree). Or the optimizer chooses a full table scan because it's cheaper.
4. **"How do you reduce replication lag?"**
   - *Hint:* Write to Master, read from Slave. If slave falls behind, use `parallel replication` (MySQL 5.7+), move to better hardware, or offload heavy analytical queries to a separate read replica.

---

## 4. Redis (Caching, Pub/Sub & Distributed Locks)

### Core Concepts to Master
- **Data Structures:** Strings (JSON cache), Hashes (object fields), Sorted Sets (leaderboards/rate limiting), Lists/Streams (queues).
- **Persistence:** RDB (snapshots) vs AOF (append-only logs) - trade-off between performance and durability.
- **Eviction Policies:** `allkeys-lru`, `volatile-ttl`, `noeviction`.
- **Distributed Locking:** `SET key value NX PX 30000` (Atomic). The Redlock algorithm debate (by Redis author Antirez).
- **Pub/Sub vs Streams:** Pub/Sub is fire-and-forget (if subscriber is down, message is lost). Streams persist messages (Consumer Groups).

### Must-Know Questions
1. **"You stored a session token in Redis. The cache keeps evicting it even though TTL isn't expired. Why?"**
   - *Hint:* Memory limit (`maxmemory`) is reached, and the eviction policy (e.g., `allkeys-lru`) is removing it. Increase memory or change policy to `volatile-lru`.
2. **"Explain Cache Penetration, Avalanche, and Breakdown. How do you solve them?"**
   - *Hint:* 
     - *Penetration:* Requesting non-existent keys. -> Cache null values with short TTL, or use Bloom Filter.
     - *Avalanche:* Many keys expire at the same time. -> Add random jitter to TTLs.
     - *Breakdown:* Hot key expires. -> Use "Mutex" (SETNX) so only one DB query happens while others wait.
3. **"Redis is single-threaded (for commands). How does it achieve high performance?"**
   - *Hint:* In-memory, non-blocking I/O (multiplexing), and extremely optimized data structures. (Note: Redis 6+ has multi-threading for I/O, but command execution is still single-threaded).
4. **"How do you implement a distributed semaphore or rate limiter using Redis?"**
   - *Hint:* Use **Sorted Sets** with timestamps as scores for sliding window rate limiting: `ZADD key timestamp`, `ZREMRANGEBYSCORE key min max`, `ZCARD key`.
5. **"You use Bull Queue. What happens if a worker crashes while processing a job?"**
   - *Hint:* Bull has a `stalled` check. If a job is in "active" state for longer than the `stalledInterval`, it moves back to "wait" and retries (if retry configured).

---

## 5. AWS (EC2, S3, RDS)

### Core Concepts to Master
- **EC2:** Security Groups (stateful firewalls), NACLs (stateless), IAM Roles (never hardcode keys), User Data (bootstrap scripts), Auto Scaling Groups (launch templates).
- **S3:** Bucket Policies (public/private), CORS configuration, Pre-signed URLs (for secure file uploads), Storage Classes (Standard, IA, Glacier, Intelligent-Tiering).
- **RDS:** Read Replicas (scaling reads), Multi-AZ (high availability, automatic failover), Backups (automated snapshots vs manual), Parameter Groups.

### Must-Know Questions
1. **"How do you securely store database credentials for a Node.js app running on EC2?"**
   - *Hint:* Never hardcode. Use **AWS Secrets Manager** or **Parameter Store (SSM)**. Grant the EC2 IAM Role permission to access these secrets.
2. **"Your application serves static assets (images) via S3. Users are complaining about slow load times."**
   - *Hint:* Enable **CloudFront** (CDN) distribution in front of S3. Use Origin Access Identity (OAI) to restrict direct S3 access.
3. **"Your RDS database CPU is at 100%. You cannot scale vertically immediately. What do you do?"**
   - *Hint:* Move read-heavy queries to a **Read Replica** (if not already). Check `SHOW FULL PROCESSLIST;` to kill long-running queries. Enable Performance Insights to find the exact slow query. Consider switching to **Aurora** for better scalability.
4. **"Difference between RDS Multi-AZ and Read Replica?"**
   - *Hint:* Multi-AZ is for **Disaster Recovery** (failover, synchronous replication to standby). Read Replica is for **Performance** (asynchronous replication to offload SELECTs). Multi-AZ has a single endpoint; Read Replicas have different endpoints.
5. **"You deploy a new version of your app. Users are seeing 503 errors during the deployment."**
   - *Hint:* EC2 instances are being terminated while handling requests. Use an **Application Load Balancer (ALB)** with health checks and connection draining (deregistration delay) to ensure existing connections finish before the instance is removed.

---

## 6. System Design Scenario (Combined Stack)

*Expect this as a whiteboarding question:*

**Problem:** Design a "Flash Sale" (Inventory Reservation) system for 1 million concurrent users.

**How to link your stack:**
1. **API Gateway / ALB:** Distribute traffic to multiple NestJS instances.
2. **Redis (Distributed Lock):** Use `SETNX` to lock the specific Product ID when reducing inventory to prevent overselling (as you already did).
3. **Bull Queues (NestJS):** Instead of updating DB directly during the request, push the order creation to a Bull queue. Return "Order is processing" immediately.
4. **MySQL:** Use a `SELECT ... FOR UPDATE` inside the Bull worker to safely deduct the stock, wrapped in a transaction.
5. **AWS:** Use S3 to serve static product images. Store the final order PDFs in S3 with pre-signed URLs for download.

**Expected Follow-up Questions:**
- *"What happens if Redis (lock server) goes down during the flash sale?"*
- *"How do you handle a user spamming the 'Buy' button 100 times?"* -> Rate limiter using Redis (Sorted Sets).

---

## 7. Action Plan to "Use" This File

1. **Day 1-10:** Read one section per day. Don't just read the *Hint*; formulate your own detailed answer out loud as if explaining to an interviewer.
2. **Day 11-20:** Write the answers in a separate "Answers.md" file. Handwriting/Digital typing boosts retention.
3. **Day 21-30:** Perform "Scenario Drills". Pick any 3 concepts and try to combine them (e.g., "How does NestJS Interceptor + Redis cache + MySQL optimize an API?").

**Pro Tip:** The interviewer cares less about the textbook definition and more about *how you would debug it in production*. Always end your answers with: *"To monitor this, I would add logging/metrics for..."* This instantly puts you in the SDE-2 bracket.