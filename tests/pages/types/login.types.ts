
export interface ILoginPage 
{
    navigate(): Promise<void>;
    enterUsername(username: string): Promise<void>;
    enterPassword(password: string): Promise<void>;
    clickLogin(): Promise<void>;
    login(username: string, password: string): Promise<void>;
    verifySuccessfulLogin(): Promise<void>;
    verifyErrorMessage(message: string): Promise<void>;
}
