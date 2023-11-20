import { describe, test, expect } from 'vitest';
import { hello } from '../src';

describe('hello', () => {
    test('it says hello', () => {
        expect(hello('world')).toBe('Hello world!');
    });
});
