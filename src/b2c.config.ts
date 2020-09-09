const clientID = "INSERT CLIENT ID HERE";
const b2cDomainHost = "TENANT.b2clogin.com";
const tenantId = "TENANT.onmicrosoft.com";
const policyName = "POLICY NAME";

export const config = {
  identityMetadata: "https://" + b2cDomainHost + "/" + tenantId + "/" + policyName + "/v2.0/.well-known/openid-configuration/",
  clientID: clientID,
  policyName: policyName,
  isB2C: true,
  validateIssuer: false,
  loggingNoPII: false,
  passReqToCallback: false
};
