# 30-Day Data Structures Mastery Plan

**Goal:** Solid command of every core data structure + enough problems per structure to recognize patterns fast in interviews.
**Format per day:** Concept → What to build/implement → Problems (Easy → Medium → Hard)
**Rule of thumb:** Spend the first 30–45 min re-implementing the structure from scratch (no library) before touching problems. This is what actually cements it.

---

## Week 1: Linear Structures (Days 1–7)

### Day 1 — Arrays & Prefix Sums
- Implement: dynamic array (resize logic), prefix sum array
- Problems:
  1. Two Sum (Easy)
  2. Best Time to Buy and Sell Stock (Easy)
  3. Product of Array Except Self (Medium)
  4. Subarray Sum Equals K (Medium)
  5. Maximum Subarray — Kadane's (Medium)

### Day 2 — Two Pointers & Sliding Window
- Implement: fixed-size window template, variable-size window template
- Problems:
  1. Valid Palindrome (Easy)
  2. Container With Most Water (Medium)
  3. 3Sum (Medium)
  4. Longest Substring Without Repeating Characters (Medium)
  5. Minimum Window Substring (Hard)

### Day 3 — Strings
- Implement: custom string builder, KMP pattern matcher (at least trace through it)
- Problems:
  1. Valid Anagram (Easy)
  2. Group Anagrams (Medium)
  3. Longest Palindromic Substring (Medium)
  4. String to Integer (atoi) (Medium)
  5. Implement strStr() / KMP (Medium)

### Day 4 — Linked List I (Singly)
- Implement: singly linked list (insert, delete, reverse, find middle)
- Problems:
  1. Reverse Linked List (Easy)
  2. Middle of the Linked List (Easy)
  3. Linked List Cycle — Floyd's (Easy)
  4. Remove Nth Node From End (Medium)
  5. Merge Two Sorted Lists (Easy)

### Day 5 — Linked List II (Doubly & Advanced)
- Implement: doubly linked list, LRU cache using DLL + HashMap
- Problems:
  1. Add Two Numbers (Medium)
  2. Copy List with Random Pointer (Medium)
  3. Reorder List (Medium)
  4. LRU Cache (Medium) — build it yourself, don't just use LinkedHashMap
  5. Merge K Sorted Lists (Hard)

### Day 6 — Stacks
- Implement: stack via array, stack via linked list, min-stack (O(1) getMin)
- Problems:
  1. Valid Parentheses (Easy)
  2. Min Stack (Medium)
  3. Evaluate Reverse Polish Notation (Medium)
  4. Daily Temperatures — monotonic stack (Medium)
  5. Largest Rectangle in Histogram (Hard)

### Day 7 — Queues & Deques
- Implement: circular queue, deque, queue using two stacks
- Problems:
  1. Implement Queue using Stacks (Easy)
  2. Design Circular Queue (Medium)
  3. Sliding Window Maximum — monotonic deque (Hard)
  4. Number of Recent Calls (Easy)
  5. Task Scheduler (Medium)

---

## Week 2: Trees & Hashing (Days 8–15)

### Day 8 — Hashing Fundamentals
- Implement: hash map from scratch (chaining for collisions)
- Problems:
  1. Two Sum revisit — explain hash collision handling
  2. Contains Duplicate II (Easy)
  3. Longest Consecutive Sequence (Medium)
  4. Subarray Sum Equals K revisit with hashmap
  5. Design HashMap (Medium)

### Day 9 — Binary Trees I (Traversals)
- Implement: binary tree node, recursive + iterative preorder/inorder/postorder, level order (BFS)
- Problems:
  1. Binary Tree Inorder Traversal (Easy)
  2. Binary Tree Level Order Traversal (Medium)
  3. Maximum Depth of Binary Tree (Easy)
  4. Symmetric Tree (Easy)
  5. Diameter of Binary Tree (Easy/Medium)

### Day 10 — Binary Trees II (Construction & Views)
- Problems:
  1. Construct Binary Tree from Preorder and Inorder (Medium)
  2. Right Side View of Binary Tree (Medium)
  3. Path Sum II (Medium)
  4. Lowest Common Ancestor of a Binary Tree (Medium)
  5. Serialize and Deserialize Binary Tree (Hard)

### Day 11 — Binary Search Trees
- Implement: BST insert, delete, search, validate
- Problems:
  1. Validate Binary Search Tree (Medium)
  2. Insert into a BST (Medium)
  3. Kth Smallest Element in a BST (Medium)
  4. Delete Node in a BST (Medium)
  5. Convert Sorted Array to BST (Easy)

### Day 12 — Heaps / Priority Queues
- Implement: min-heap from scratch (heapify up/down)
- Problems:
  1. Kth Largest Element in an Array (Medium)
  2. Top K Frequent Elements (Medium)
  3. Merge K Sorted Lists revisit — with heap
  4. Find Median from Data Stream (Hard)
  5. Task Scheduler revisit — with heap approach

### Day 13 — Tries
- Implement: trie insert/search/startsWith from scratch
- Problems:
  1. Implement Trie (Prefix Tree) (Medium)
  2. Design Add and Search Words Data Structure (Medium)
  3. Word Search II (Hard)
  4. Longest Word in Dictionary (Medium)
  5. Replace Words (Medium)

### Day 14 — Segment Trees & Fenwick (BIT)
- Implement: segment tree for range sum, Fenwick tree
- Problems:
  1. Range Sum Query — Mutable (Medium)
  2. Range Sum Query 2D — Immutable (Medium)
  3. Count of Smaller Numbers After Self (Hard)
  4. Reverse Pairs (Hard)

### Day 15 — Review + Mixed Practice
- Re-implement any structure you're shakiest on from memory (timed, no notes)
- Solve 5 mixed medium problems drawn randomly from Days 1–14 topics

---

## Week 3: Graphs & Advanced Structures (Days 16–23)

### Day 16 — Graph Representations & Traversal
- Implement: adjacency list/matrix, BFS, DFS (recursive + iterative)
- Problems:
  1. Number of Islands (Medium)
  2. Flood Fill (Easy)
  3. Clone Graph (Medium)
  4. Max Area of Island (Medium)
  5. Rotting Oranges (Medium)

### Day 17 — Graph — Topological Sort & Cycle Detection
- Implement: Kahn's algorithm, DFS-based cycle detection
- Problems:
  1. Course Schedule (Medium)
  2. Course Schedule II (Medium)
  3. Detect Cycle in a Directed Graph (Medium)
  4. Alien Dictionary (Hard)
  5. Find Eventual Safe States (Medium)

### Day 18 — Union-Find (Disjoint Set Union)
- Implement: DSU with path compression + union by rank
- Problems:
  1. Number of Provinces (Medium)
  2. Redundant Connection (Medium)
  3. Accounts Merge (Medium)
  4. Number of Islands II (Hard)
  5. Satisfiability of Equality Equations (Medium)

### Day 19 — Shortest Path Algorithms
- Implement: Dijkstra's, Bellman-Ford
- Problems:
  1. Network Delay Time (Medium)
  2. Cheapest Flights Within K Stops (Medium)
  3. Path With Minimum Effort (Medium)
  4. Swim in Rising Water (Hard)

### Day 20 — Minimum Spanning Tree
- Implement: Prim's, Kruskal's
- Problems:
  1. Min Cost to Connect All Points (Medium)
  2. Optimize Water Distribution in a Village (Hard)
  3. Connecting Cities With Minimum Cost (Medium)

### Day 21 — Advanced Graphs (Bipartite, SCC)
- Implement: bipartite check (BFS coloring), Kosaraju's/Tarjan's (at least trace through)
- Problems:
  1. Is Graph Bipartite? (Medium)
  2. Possible Bipartition (Medium)
  3. Critical Connections in a Network (Hard)
  4. Number of Strongly Connected Components (Medium/Hard)

### Day 22 — Balanced Trees (AVL / Red-Black — conceptual)
- Focus: understand rotations conceptually, when DBs/language libraries use these (TreeMap, etc.)
- Problems:
  1. Balanced Binary Tree (Easy)
  2. Convert BST to Balanced BST — via array
  3. My Calendar I/II/III (Medium/Hard) — good proxy for balanced interval structures

### Day 23 — Review + Mixed Graph Practice
- Re-implement DSU and Dijkstra from memory, timed
- Solve 5 mixed medium/hard problems from Days 16–22

---

## Week 4: Patterns, Combos & Mock Practice (Days 24–30)

### Day 24 — Intervals
- Problems:
  1. Merge Intervals (Medium)
  2. Insert Interval (Medium)
  3. Non-overlapping Intervals (Medium)
  4. Meeting Rooms II (Medium) — heap + intervals combo

### Day 25 — Backtracking (built on recursion/tree/graph structures)
- Problems:
  1. Subsets (Medium)
  2. Permutations (Medium)
  3. Combination Sum (Medium)
  4. N-Queens (Hard)
  5. Word Search (Medium)

### Day 26 — Design Problems (structure combos, common in interviews)
- Problems:
  1. LFU Cache (Hard)
  2. Design Twitter (Medium)
  3. Insert Delete GetRandom O(1) (Medium)
  4. Time Based Key-Value Store (Medium)
  5. All O`one Data Structure (Hard)

### Day 27 — Monotonic Stack/Queue Deep Dive
- Problems:
  1. Next Greater Element I & II (Easy/Medium)
  2. Trapping Rain Water (Hard)
  3. Maximal Rectangle (Hard)
  4. Sum of Subarray Minimums (Medium)

### Day 28 — Mixed Hard Problems (structure identification drill)
- Pick 5 hard problems at random from LeetCode top interview list; before coding, force yourself to state out loud which structure(s) apply and why

### Day 29 — Full Mock Interview Day
- 2 mock sessions (45 min each), 1–2 problems per session, unfamiliar problems
- Focus: explaining structure choice out loud, time/space complexity analysis

### Day 30 — Final Review
- Revisit your weakest 3 structures (based on Days 1–29 notes)
- Re-implement each from scratch, no reference
- Write a 1-page cheat sheet per structure: operations + time complexity + when to use it

---

## Quick Reference — Time Complexity Cheat Sheet

| Structure | Access | Search | Insert | Delete |
|---|---|---|---|---|
| Array | O(1) | O(n) | O(n) | O(n) |
| Linked List | O(n) | O(n) | O(1)* | O(1)* |
| Stack/Queue | O(n) | O(n) | O(1) | O(1) |
| Hash Map | O(1)avg | O(1)avg | O(1)avg | O(1)avg |
| BST (balanced) | O(log n) | O(log n) | O(log n) | O(log n) |
| Heap | O(1) top | O(n) | O(log n) | O(log n) |
| Trie | — | O(L) | O(L) | O(L) |
| Graph (adj list) | — | O(V+E) | O(1) | O(E) |

*with reference to node

---
