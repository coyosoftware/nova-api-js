import Companies from "./resources/companies";
import Public from "./resources/public";
import Reports from "./resources/reports";
import Users from "./resources/users";
declare class NovaApi {
    #private;
    constructor(subdomain?: string, apiKey?: string);
    get companies(): Companies;
    get public(): Public;
    get reports(): Reports;
    get users(): Users;
}
export default NovaApi;
