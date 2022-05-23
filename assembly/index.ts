export function helloWorld(): string {
    return 'Hello World';
    }
   
    /**
 * Edit greeting() function such that it returns a string containing both name parameter and the wallet address calling this function
 * Hint: wallet address is found as follows: Context.sender
 * @param name
 * @returns
 */
export function greeting(name: string): string {
    return '${Content.name } of wallet ${Context.sender} greated you';
  }