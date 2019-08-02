import { Chmaldloopback4Application } from '../..';
import { Client } from '@loopback/testlab';
export declare function setupApplication(): Promise<AppWithClient>;
export interface AppWithClient {
    app: Chmaldloopback4Application;
    client: Client;
}
