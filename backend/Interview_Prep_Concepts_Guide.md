# Complete Interview Prep Guide
### Node.js | NestJS | MySQL | Redis | AWS | DSA — Basic to Advanced

---

## 1. NODE.JS

### Basics
- **What is Node.js**: JavaScript runtime built on V8 engine, single-threaded, event-driven, non-blocking I/O.
- **Event Loop**: The mechanism that allows Node to perform non-blocking I/O despite being single-threaded.
  - Phases: Timers → Pending Callbacks → Idle/Prepare → Poll → Check → Close Callbacks.
  - `process.nextTick()` and Promise microtasks run **before** the next event loop phase.
- **Call Stack, Callback Queue, Microtask Queue**: Understand execution order — sync code → microtasks (Promises, `process.nextTick`) → macrotasks (`setTimeout`, `setImmediate`, I/O).
- **Modules**: CommonJS (`require`/`module.exports`) vs ES Modules (`import`/`export`). Know differences in loading (sync vs async), caching behavior.
- **npm/yarn/pnpm**: `package.json`, `package-lock.json`, semantic versioning (`^`, `~`), `node_modules` resolution algorithm.
- **Global objects**: `process`, `Buffer`, `__dirname`, `__filename`, `global`.

### Intermediate
- **Asynchronous patterns**: Callbacks → Promises → async/await. Callback hell and how Promises solve it.
- **Error handling**: try/catch with async/await, unhandled promise rejections, `process.on('uncaughtException')`.
- **Streams**: Readable, Writable, Duplex, Transform streams. Backpressure handling. Piping (`readable.pipe(writable)`).
- **Buffers**: Working with binary data, encoding types (utf8, base64, hex).
- **File System (fs) module**: Sync vs async methods, `fs.promises` API, streaming large files instead of reading fully into memory.
- **Events module**: `EventEmitter`, custom events, `.on()`, `.emit()`, `.once()`.
- **Middleware pattern**: Used heavily in Express/NestJS — chain of functions with `next()`.
- **Environment & Config**: `.env` files, `dotenv`, 12-factor app config principles.

### Advanced
- **Child Processes**: `spawn`, `exec`, `fork` — when to use each. Inter-process communication.
- **Cluster module**: Scaling Node across CPU cores; master-worker architecture; load balancing between workers.
- **Worker Threads**: For CPU-intensive tasks (unlike cluster, shares memory via `SharedArrayBuffer`).
- **Memory management**: V8 heap (old space, new space), garbage collection (mark-sweep, generational GC), memory leaks (unbounded caches, closures holding references, global variables, forgotten timers/listeners).
- **Performance profiling**: `--inspect` flag, Chrome DevTools, `clinic.js`, heap snapshots, CPU profiling.
- **Event loop blocking**: Identifying and avoiding synchronous CPU-heavy operations (e.g., large JSON.parse, sync crypto) that block the loop.
- **Microservices communication**: HTTP/REST, gRPC, message queues (Kafka, RabbitMQ), event-driven architecture.
- **Security**: Preventing prototype pollution, avoiding `eval`, input sanitization, rate limiting, helmet.js, CORS configuration.
- **Graceful shutdown**: Handling `SIGTERM`/`SIGINT`, draining connections, closing DB pools before exit.

---

## 2. NESTJS

### Basics
- **Architecture**: Modules, Controllers, Providers/Services — inspired by Angular's structure.
- **Decorators**: `@Module()`, `@Controller()`, `@Injectable()`, `@Get()`, `@Post()`, `@Body()`, `@Param()`, `@Query()`.
- **Dependency Injection (DI)**: NestJS's IoC container automatically resolves and injects dependencies via constructor injection.
- **DTOs (Data Transfer Objects)**: Define shape of data, used with `class-validator` and `class-transformer` for validation/transformation.
- **Pipes**: Transform or validate input data (`ValidationPipe`, `ParseIntPipe`, custom pipes).

### Intermediate
- **Guards**: Used for authorization/authentication (`CanActivate` interface), e.g., `AuthGuard`, role-based guards.
- **Interceptors**: Wrap request/response handling — logging, transforming responses, caching, timeout handling (`NestInterceptor`, `intercept()` method with `Observable`).
- **Exception Filters**: Custom error handling (`@Catch()`, `ExceptionFilter`), global vs route-scoped filters.
- **Middleware**: Similar to Express middleware, runs before route handler, no access to `ExecutionContext`.
- **Execution order**: Middleware → Guards → Interceptors (before) → Pipes → Route Handler → Interceptors (after) → Exception Filters (if error).
- **Custom decorators**: `createParamDecorator()` for extracting custom data from requests.
- **Modules deep dive**: Feature modules, shared modules, dynamic modules (`forRoot()`, `forFeature()`), global modules (`@Global()`).
- **Configuration management**: `@nestjs/config`, environment-based config validation with Joi/class-validator.

### Advanced
- **Microservices in NestJS**: `@nestjs/microservices` package — supports TCP, Redis, gRPC, Kafka, RabbitMQ, NATS as transport layers.
- **Message patterns**: `@MessagePattern()` (request-response) vs `@EventPattern()` (fire-and-forget events).
- **WebSockets**: `@WebSocketGateway()`, integrating Socket.io, handling rooms/namespaces, broadcasting events.
- **Bull/BullMQ integration**: `@nestjs/bull` for queue processing, defining processors, handling job retries/backoff, concurrency control.
- **Custom providers**: `useValue`, `useClass`, `useFactory`, `useExisting` — advanced DI patterns.
- **Circular dependency resolution**: `forwardRef()`.
- **Interceptors for caching**: Implementing response caching with Redis via custom interceptors.
- **Testing**: Unit testing with Jest, `Test.createTestingModule()`, mocking providers, e2e testing with `supertest`.
- **Request lifecycle & scopes**: `DEFAULT`, `REQUEST`, `TRANSIENT` provider scopes and their performance implications.
- **Rate limiting & Throttling**: `@nestjs/throttler`.
- **GraphQL integration**: Code-first vs schema-first approach with `@nestjs/graphql`.
- **Distributed transactions/Sagas**: Handling consistency across microservices (compensating transactions).

---

## 3. MYSQL

### Basics
- **Data types**: INT, VARCHAR, TEXT, DATE, DATETIME, DECIMAL, BOOLEAN, JSON.
- **CRUD operations**: SELECT, INSERT, UPDATE, DELETE.
- **Keys**: Primary key, foreign key, unique key, composite key.
- **Joins**: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN (simulated via UNION), CROSS JOIN, SELF JOIN.
- **Aggregate functions**: COUNT, SUM, AVG, MIN, MAX, GROUP BY, HAVING vs WHERE.
- **Constraints**: NOT NULL, UNIQUE, CHECK, DEFAULT, FOREIGN KEY (ON DELETE CASCADE/SET NULL).

### Intermediate
- **Indexing**: B-Tree indexes, when indexes help vs hurt (write-heavy tables), composite indexes and column order importance, covering indexes.
- **Normalization**: 1NF, 2NF, 3NF, BCNF — and when to denormalize for performance.
- **Query optimization**: `EXPLAIN`/`EXPLAIN ANALYZE`, reading query execution plans, identifying full table scans.
- **N+1 query problem**: Identifying and solving via joins/eager loading (relevant to your TypeORM experience).
- **Pagination strategies**: OFFSET/LIMIT (and its performance issues at scale) vs cursor-based (keyset) pagination.
- **Transactions**: ACID properties, `BEGIN`/`COMMIT`/`ROLLBACK`, savepoints.
- **Isolation levels**: READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ (MySQL default), SERIALIZABLE — and what anomalies each prevents (dirty read, non-repeatable read, phantom read).
- **Locking**: Shared locks (read) vs exclusive locks (write), row-level vs table-level locking, `SELECT ... FOR UPDATE`.

### Advanced
- **Deadlocks**: Causes, detection, and prevention strategies (consistent lock ordering, shorter transactions, retry logic).
- **Replication**: Master-slave (source-replica) replication, binlog-based replication, read/write splitting for scaling reads (you've done this — be ready to explain your setup in depth).
- **Sharding**: Horizontal partitioning strategies, shard key selection, challenges (cross-shard joins, rebalancing).
- **Partitioning**: RANGE, LIST, HASH partitioning for large tables.
- **Connection pooling**: Why it matters, pool size tuning, avoiding connection exhaustion.
- **Query caching & buffer pool**: InnoDB buffer pool tuning, query cache (deprecated in MySQL 8.0 — know alternatives).
- **Storage engines**: InnoDB (default, supports transactions/FK) vs MyISAM (no transactions, table-level locking).
- **Full-text search**: `MATCH() AGAINST()`, when to use vs external search engines (Elasticsearch).
- **Schema migrations**: Zero-downtime migration strategies, online DDL operations.
- **Backup strategies**: Logical (`mysqldump`) vs physical backups, point-in-time recovery via binlogs.

---

## 4. REDIS

### Basics
- **What is Redis**: In-memory key-value data store, used for caching, session storage, pub/sub, queues.
- **Data types**: String, List, Set, Sorted Set (ZSET), Hash, Stream.
- **Basic commands**: `GET`, `SET`, `EXPIRE`, `TTL`, `DEL`, `EXISTS`, `INCR`/`DECR`.
- **Persistence**: RDB (snapshotting) vs AOF (append-only file) — trade-offs between durability and performance.

### Intermediate
- **Expiration & Eviction**: TTL-based expiration, eviction policies (`noeviction`, `allkeys-lru`, `volatile-lru`, `allkeys-lfu`, etc.).
- **Pub/Sub**: `PUBLISH`/`SUBSCRIBE` for real-time messaging — no message persistence (if subscriber is offline, message is lost).
- **Sorted Sets use cases**: Leaderboards, rate limiting, priority queues (`ZADD`, `ZRANGE`, `ZINCRBY`).
- **Hashes for object storage**: Storing structured data efficiently (`HSET`, `HGET`, `HGETALL`).
- **Bull/BullMQ (Job Queues)**: How Redis backs job queues — job states (waiting, active, completed, failed, delayed), retries with backoff, concurrency, priority queues, delayed jobs.
- **Caching strategies**: Cache-aside (lazy loading), write-through, write-behind, cache invalidation strategies.
- **Cache stampede problem**: And solutions (locking, request coalescing, staggered TTLs).

### Advanced
- **Distributed Locking**: `SET key value NX PX ttl` pattern, Redlock algorithm (multi-instance distributed locks), lock release safety (Lua scripts to avoid race conditions on unlock) — you've implemented this, be ready to explain edge cases (lock expiry mid-operation, clock drift).
- **Redis Streams**: Alternative to Pub/Sub with persistence, consumer groups, message acknowledgment (`XADD`, `XREAD`, `XACK`).
- **Lua scripting**: Atomic multi-command operations via `EVAL`, ensuring atomicity for complex operations (e.g., check-then-act patterns).
- **Redis Cluster**: Sharding across multiple nodes, hash slots (16384 slots), handling node failures.
- **Redis Sentinel**: High availability — automatic failover for master-replica setups.
- **Pipelining**: Batching multiple commands to reduce round-trip latency.
- **Transactions in Redis**: `MULTI`/`EXEC`/`DISCARD`/`WATCH` (optimistic locking pattern).
- **Memory optimization**: Understanding memory overhead per data type, using appropriate encoding (ziplist/listpack for small collections).
- **Redis Pub/Sub vs Streams vs Queues**: When to use each (ephemeral broadcast vs durable ordered log vs job processing).

---

## 5. AWS

### Basics
- **EC2**: Virtual servers, instance types, AMIs, security groups, key pairs, elastic IPs.
- **S3**: Object storage, buckets, storage classes (Standard, IA, Glacier), bucket policies vs IAM policies.
- **RDS**: Managed relational databases, Multi-AZ deployments, read replicas, automated backups.
- **IAM**: Users, groups, roles, policies — principle of least privilege.
- **VPC basics**: Public vs private subnets, internet gateway, route tables.

### Intermediate
- **Load Balancers**: ALB (Application) vs NLB (Network) vs CLB (Classic) — when to use each.
- **Auto Scaling Groups**: Scaling policies (target tracking, step scaling), health checks.
- **Security Groups vs NACLs**: Stateful vs stateless, instance-level vs subnet-level.
- **RDS deep dive**: Read replicas for scaling reads, failover with Multi-AZ, parameter groups, connection pooling with RDS Proxy.
- **CloudWatch**: Metrics, alarms, logs, dashboards for monitoring.
- **SQS**: Standard vs FIFO queues, visibility timeout, dead-letter queues — comparing to Redis/Bull for job processing.
- **SNS**: Pub/sub notification service, fan-out patterns (SNS → multiple SQS queues).
- **Elastic Beanstalk / ECS basics**: Managed deployment options.

### Advanced
- **Docker on AWS**: ECS (Fargate vs EC2 launch type), ECR for container registry, task definitions, service auto-scaling.
- **CI/CD on AWS**: CodePipeline, CodeBuild, CodeDeploy — or integrating GitHub Actions with AWS deployments.
- **VPC advanced**: NAT gateways, VPC peering, private subnets for databases, bastion hosts.
- **Caching layer**: ElastiCache (Redis/Memcached) — cluster mode, replication groups.
- **Serverless**: Lambda functions, API Gateway, event-driven architectures (S3 triggers, EventBridge).
- **Infrastructure as Code**: CloudFormation or Terraform basics — reproducible infra.
- **Cost optimization**: Reserved instances vs Spot instances vs On-Demand, right-sizing resources.
- **High availability architecture**: Multi-AZ, multi-region strategies, disaster recovery (RTO/RPO concepts).
- **Secrets management**: AWS Secrets Manager / Parameter Store vs storing secrets in `.env`.
- **CloudFront (CDN)**: Edge caching, origin access identity, cache invalidation.

---

## 6. DATA STRUCTURES & ALGORITHMS (DSA)

### Basic Data Structures
- **Arrays**: Traversal, insertion/deletion complexity, two-pointer technique, sliding window.
- **Strings**: Pattern matching, string manipulation, palindrome checks, anagram detection.
- **Linked Lists**: Singly/doubly linked lists, reversal, cycle detection (Floyd's algorithm), merging sorted lists.
- **Stacks**: LIFO, use cases (balanced parentheses, undo operations, monotonic stack for next greater element).
- **Queues**: FIFO, circular queue, deque, priority queue.
- **Hashing**: Hash maps/sets, collision handling (chaining, open addressing), use cases (frequency counting, two-sum pattern).

### Intermediate Structures & Techniques
- **Binary Search**: Standard search, search in rotated sorted array, finding boundaries (first/last occurrence), binary search on answer space.
- **Trees**: Binary trees, BST operations (insert/delete/search), traversals (in-order, pre-order, post-order, level-order/BFS), height/depth, balanced trees (AVL, Red-Black — conceptual understanding).
- **Heaps**: Min-heap/max-heap, priority queue applications, heap sort, k-largest/smallest element problems.
- **Tries**: Prefix trees for string search/autocomplete problems.
- **Graphs**: Representation (adjacency list/matrix), BFS, DFS, connected components, cycle detection (directed/undirected).
- **Recursion & Backtracking**: Subsets, permutations, combinations, N-Queens, Sudoku solver pattern.

### Advanced Algorithms
- **Dynamic Programming**: 
  - 1D DP: Fibonacci, climbing stairs, house robber.
  - 2D DP: Longest common subsequence, edit distance, knapsack (0/1 and unbounded).
  - DP on strings, DP on trees, DP with bitmasking.
  - Memoization (top-down) vs Tabulation (bottom-up).
- **Greedy Algorithms**: Activity selection, interval scheduling, Huffman coding, when greedy works vs fails.
- **Graph Algorithms (Advanced)**:
  - Shortest path: Dijkstra's, Bellman-Ford (handles negative weights), Floyd-Warshall (all-pairs).
  - Minimum Spanning Tree: Kruskal's, Prim's.
  - Topological sort (Kahn's algorithm / DFS-based) — useful for dependency resolution.
  - Union-Find (Disjoint Set Union) — with path compression and union by rank.
- **Sliding Window & Two Pointers (Advanced)**: Variable-size window problems, subarray/substring problems.
- **Bit Manipulation**: AND/OR/XOR tricks, checking power of 2, counting set bits, bitmasking in DP.
- **Sorting algorithms**: Merge sort, quick sort (and worst-case analysis), understanding when to use library sort vs custom.
- **Time & Space Complexity**: Big-O analysis for all above, amortized analysis (e.g., dynamic array resizing).

### System Design Adjacent (often paired with DSA rounds)
- **Design patterns relevant to backend**: Singleton, Factory, Observer (pub/sub), Strategy, Repository pattern.
- **LRU Cache implementation**: Classic problem combining HashMap + Doubly Linked List — very likely to be asked given your Redis/caching background.
- **Rate limiter design**: Token bucket, sliding window log/counter — directly relevant to your Redis experience.

---

## How to Use This Guide
1. **Weeks 1-2**: Read through Basic + Intermediate sections for each topic, take notes in your own words.
2. **Weeks 3-6**: Practice DSA daily (following this guide's DSA structure), and revisit Advanced sections for Node/NestJS/MySQL/Redis/AWS one topic per day.
3. **Weeks 7-8**: Use the "Advanced" sections as flashcards — you should be able to explain each bullet point out loud in 30-60 seconds without notes. This is exactly the depth interviewers probe at 10+ LPA levels.
4. Tie every backend concept back to your actual MES/WMS project (locking, queues, Redis Pub/Sub, master-slave DB) — real production experience explained well outperforms textbook answers.
