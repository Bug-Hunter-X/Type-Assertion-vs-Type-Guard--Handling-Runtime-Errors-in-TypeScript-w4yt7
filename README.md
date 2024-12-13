# Type Assertion vs. Type Guard in TypeScript

This code demonstrates the difference between type assertions and type guards in TypeScript, highlighting how type assertions can mask runtime errors, while type guards help prevent such issues.  The example includes functions for addition and subtraction, showcasing how to handle potential type mismatches.

## Key Concepts

* **Type Assertion:** `(expression as type)` – This tells the TypeScript compiler to treat `expression` as a value of the specified `type`.  However, it doesn't perform any runtime checks; if the assertion is incorrect, unexpected behavior might occur.
* **Type Guard:** A function that narrows down a type to a more specific type.  It performs runtime checks to ensure type safety.
* **Narrowing:** The process of reducing the type of a variable to a more specific subtype based on runtime conditions.