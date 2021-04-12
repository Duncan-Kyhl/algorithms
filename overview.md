# Data Structures and Algorithms

An algorithm is a set of well-defined instructions in sequence to solve a problem.

### Qualities of Good Algorithms:
1. Input and output should be defined precisely.
2. Each step in the algorithm should be clear amd unambiguous.
3. Algortihms should be most effective among many different ways to solve a problem.
4. An algortihm shouldn't include computer code. Instead, the algorithm should be written in such a way that it can be used in different programming languages.

##### Example 1: Find Root of the quadratic equation ax^2 + bx + c = 0
---  
Step 1: Start
Step 2: Declare variables a, b, c, D, x1, x2, rp and ip;
Step 3: Calculate discriminant
         D ← b2-4ac
Step 4: If D ≥ 0
              r1 ← (-b+√D)/2a
              r2 ← (-b-√D)/2a 
              Display r1 and r2 as roots.
        Else     
              Calculate real part and imaginary part
              rp ← -b/2a
              ip ← √(-D)/2a
              Display rp+j(ip) and rp-j(ip) as roots
Step 5: Stop  
---


##### Example 2: Find the factorial of n
---
Initialize fact = 1
For every value v in range 1 to n:
    Multiply the fact by v
fact contains the factorial of n

If this were C++ code:
    ---
    int factorial(int n) {
        int fact = 1;
        for (int v = 1; v <= n; v++) {
            fact = fact * v;
        }
        return fact;
    }
    ---
---

But executing this code takes a long time for large numbers like 10^11.

### Time and Memory
Two of the most valuable resources of a computer program are time and memory.

- time to run code = number of instructions * time to execute each instruction

Instead, 
the sum of first N natural numbers is given by: sum = N * (N + 1) / 2
---
If this were C++ code:
int sum(int N) {
    return N * (N + 1) / 2;
}
---








