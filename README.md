# Loopback 4 with Azure B2C Authentication

[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)

## Configuration

Open the `src\b2c.config.ts` file and update the following settings:

```javascript
const clientID = "INSERT CLIENT ID HERE"; // 00000000-0000-0000-0000-000000000000
const b2cDomainHost = "TENANT.b2clogin.com"; // domainb2c.b2clogin.com
const tenantId = "TENANT.onmicrosoft.com"; // domainb2c.onmicrosoft.com
const policyName = "POLICY NAME"; // B2C_1_policyname
```
