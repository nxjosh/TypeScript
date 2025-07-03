// Test file for throws signature syntax

// Basic function with throws
function basicThrows(): void throws Error {
    throw new Error("test");
}

// Function with throws and parameters
function withParams(x: number): string throws TypeError, RangeError {
    if (x < 0) throw new RangeError("negative");
    if (x > 100) throw new TypeError("too large");
    return x.toString();
}

// Arrow function with throws
const arrowThrows = (x: number): number throws Error => {
    if (x === 0) throw new Error("zero");
    return 1 / x;
};

// Method with throws
class TestClass {
    methodWithThrows(x: string): boolean throws SyntaxError {
        if (!x) throw new SyntaxError("empty string");
        return x.length > 0;
    }
}

// Function with throws and return type
function complexThrows<T>(items: T[]): T throws Error, TypeError {
    if (!items.length) throw new Error("empty array");
    if (items.length > 1000) throw new TypeError("too many items");
    return items[0];
}

// Async function with throws
async function asyncThrows(): Promise<void> throws NetworkError {
    throw new NetworkError("network failed");
}

// Function with throws and reference types
function withRefTypes(x: &i32): &mut string throws Error {
    if (x === 0) throw new Error("zero");
    return &mut "valid";
}

// Interface with throws method
interface ThrowsInterface {
    method(): void throws Error;
}

// Type alias with throws
type ThrowsFunction = (x: number) => string throws Error;

// Function with multiple throws
function multipleThrows(x: number): void throws Error, TypeError, RangeError {
    if (x < 0) throw new RangeError("negative");
    if (x > 100) throw new TypeError("too large");
    if (x === 42) throw new Error("magic number");
}

// Test error cases - these should produce errors
function invalidThrows1(): void throws {  // Missing error type
    throw new Error("test");
}

function invalidThrows2(): void throws Error, {  // Trailing comma
    throw new Error("test");
}

// Test that throws doesn't interfere with intersection types
function intersectionTest(x: A & B): C & D throws Error {
    throw new Error("test");
}

// Test that throws works with reference types
function refTypeTest(x: &i32, y: &mut string): &f64 throws Error {
    throw new Error("test");
} 