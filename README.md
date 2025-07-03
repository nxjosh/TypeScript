# TypeScript

## 🔥 TypeScript with Throws Clause Support

This is a fork of Microsoft's TypeScript that adds support for **throws clauses** in function signatures, enabling explicit exception type declarations and compile-time validation of error handling.

### ✨ Features

- **Explicit exception declarations** in function signatures
- **Compile-time validation** that thrown exceptions match the declared throws clause
- **Support for complex types** including unions, conditionals, and generics
- **Type inference** for exception types in function bodies
- **IntelliSense integration** for better developer experience

### 📝 Syntax Examples

#### Basic Exception Declaration
```typescript
// Declare that a function can throw specific error types
function parseNumber(input: string): number throws TypeError, RangeError {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string'); // ✅ Valid - TypeError is declared
    }
    
    const num = parseInt(input);
    if (isNaN(num)) {
        throw new RangeError('Invalid number format'); // ✅ Valid - RangeError is declared  
    }
    
    return num;
}
```

#### Empty Throws Clause (Function Can Rethrow)
```typescript
// Empty throws clause allows rethrowing any caught exceptions
function safeOperation<T>(fn: () => T): T throws {
    try {
        return fn();
    } catch (error) {
        // Log error and rethrow
        console.error('Operation failed:', error);
        throw error; // ✅ Valid - empty throws clause allows rethrowing
    }
}
```

#### Union Types in Throws Clauses
```typescript
// Multiple exception types using union syntax
function processData(data: unknown): string throws TypeError | ValidationError {
    if (typeof data !== 'object') {
        throw new TypeError('Data must be an object'); // ✅ Valid
    }
    
    if (!isValid(data)) {
        throw new ValidationError('Invalid data format'); // ✅ Valid
    }
    
    return JSON.stringify(data);
}
```

#### Generic Throws Clauses with Conditional Types
```typescript
// Conditional exception types based on generic parameters
function convert<T extends string | number>(
    value: T
): string throws T extends string ? TypeError : RangeError {
    
    if (typeof value === 'string') {
        if (value.length === 0) {
            throw new TypeError('Empty string not allowed'); // ✅ Valid when T extends string
        }
        return value;
    } else {
        if (value < 0) {
            throw new RangeError('Negative numbers not allowed'); // ✅ Valid when T extends number  
        }
        return value.toString();
    }
}
```

#### Interface Method Signatures
```typescript
interface DataProcessor {
    // Method signatures can include throws clauses
    process(data: string): ProcessedData throws ValidationError;
    
    // Optional throws clause with multiple types
    validate?(input: unknown): boolean throws TypeError, ValidationError;
}

class MyProcessor implements DataProcessor {
    process(data: string): ProcessedData throws ValidationError {
        if (!data.trim()) {
            throw new ValidationError('Data cannot be empty'); // ✅ Valid
        }
        return { processed: data.trim() };
    }
}
```

#### Type Inference and Validation
```typescript
function riskyOperation(): string throws Error {
    if (Math.random() > 0.5) {
        throw new TypeError('Random failure'); // ❌ Error: TypeError not declared in throws clause
    }
    
    throw new Error('Expected failure'); // ✅ Valid - Error is declared
}

// Function without throws clause cannot throw
function safeFunction(): string {
    throw new Error('Oops'); // ❌ Error: Function does not declare any exceptions in throws clause
}
```

#### Throws Clause Inference from Function Body
```typescript
// TypeScript can infer throws clause from explicit throws in function body
function inferredThrower(value: unknown) /* throws TypeError | RangeError */ {
    if (typeof value !== 'number') {
        throw new TypeError('Value must be a number'); // Inferred: TypeError
    }
    
    if (value < 0) {
        throw new RangeError('Value must be non-negative'); // Inferred: RangeError
    }
    
    return value.toString();
}
// TypeScript infers: function inferredThrower(value: unknown): string throws TypeError | RangeError

// Mixed explicit and inferred throws
function mixedThrower(data: string): number throws SyntaxError {
    if (!data) {
        throw new TypeError('Data is required'); // ❌ Error: TypeError not in explicit throws clause
    }
    
    if (data === 'invalid') {
        throw new SyntaxError('Invalid data format'); // ✅ Valid - SyntaxError is declared
    }
    
    return parseInt(data);
}

// Conditional throws inference
function conditionalInference(condition: boolean) {
    if (condition) {
        throw new Error('Condition failed'); // Inferred: Error
    }
    // TypeScript infers: throws Error (only when condition is true)
    return 'success';
}

#### Arrow Functions with Throws Clauses
```typescript
// Arrow functions support throws clauses too
const asyncParser = async (input: string): Promise<number> throws TypeError => {
    if (!input) {
        throw new TypeError('Input is required'); // ✅ Valid
    }
    return parseInt(input);
};

// Generic arrow function with conditional throws
const conditionalThrower = <T>(value: T): string throws T extends Error ? never : TypeError => {
    if (value instanceof Error) {
        return value.message; // No exception thrown when T extends Error
    }
    
    if (typeof value !== 'string') {
        throw new TypeError('Value must be string or Error'); // ✅ Valid when T doesn't extend Error
    }
    
    return value;
};
```

### 🔗 Original TypeScript

This fork is based on Microsoft's TypeScript. For the original project, documentation, and community resources, see below:

[![CI](https://github.com/microsoft/TypeScript/actions/workflows/ci.yml/badge.svg)](https://github.com/microsoft/TypeScript/actions/workflows/ci.yml)
[![npm version](https://badge.fury.io/js/typescript.svg)](https://www.npmjs.com/package/typescript)
[![Downloads](https://img.shields.io/npm/dm/typescript.svg)](https://www.npmjs.com/package/typescript)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/microsoft/TypeScript/badge)](https://securityscorecards.dev/viewer/?uri=github.com/microsoft/TypeScript)


[TypeScript](https://www.typescriptlang.org/) is a language for application-scale JavaScript. TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript. Try it out at the [playground](https://www.typescriptlang.org/play/), and stay up to date via [our blog](https://blogs.msdn.microsoft.com/typescript) and [Twitter account](https://twitter.com/typescript).

Find others who are using TypeScript at [our community page](https://www.typescriptlang.org/community/).

## Installing

For the latest stable version:

```bash
npm install -D typescript
```

For our nightly builds:

```bash
npm install -D typescript@next
```

## Contribute

There are many ways to [contribute](https://github.com/microsoft/TypeScript/blob/main/CONTRIBUTING.md) to TypeScript.
* [Submit bugs](https://github.com/microsoft/TypeScript/issues) and help us verify fixes as they are checked in.
* Review the [source code changes](https://github.com/microsoft/TypeScript/pulls).
* Engage with other TypeScript users and developers on [StackOverflow](https://stackoverflow.com/questions/tagged/typescript).
* Help each other in the [TypeScript Community Discord](https://discord.gg/typescript).
* Join the [#typescript](https://twitter.com/search?q=%23TypeScript) discussion on Twitter.
* [Contribute bug fixes](https://github.com/microsoft/TypeScript/blob/main/CONTRIBUTING.md).

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see
the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com)
with any additional questions or comments.

## Documentation

*  [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
*  [Programming handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
*  [Homepage](https://www.typescriptlang.org/)

## Roadmap

For details on our planned features and future direction, please refer to our [roadmap](https://github.com/microsoft/TypeScript/wiki/Roadmap).
