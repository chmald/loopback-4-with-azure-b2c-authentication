"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const boot_1 = require("@loopback/boot");
const authentication_1 = require("@loopback/authentication");
const core_1 = require("@loopback/core");
const rest_explorer_1 = require("@loopback/rest-explorer");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const service_proxy_1 = require("@loopback/service-proxy");
const path = __importStar(require("path"));
const sequence_1 = require("./sequence");
const b2c_auth_strategy_1 = require("./b2c.auth.strategy");
class Chmaldloopback4Application extends boot_1.BootMixin(service_proxy_1.ServiceMixin(repository_1.RepositoryMixin(rest_1.RestApplication))) {
    constructor(options = {}) {
        super(options);
        // Set up the custom sequence
        this.sequence(sequence_1.MySequence);
        // Set up default home page
        this.static('/', path.join(__dirname, '../public'));
        // Customize @loopback/rest-explorer configuration here
        this.bind(rest_explorer_1.RestExplorerBindings.CONFIG).to({
            path: '/explorer',
        });
        this.component(rest_explorer_1.RestExplorerComponent);
        this.bind('authentication.strategies.b2cAuthStrategy')
            .to(b2c_auth_strategy_1.b2cAuthStrategy)
            .tag({
            [core_1.CoreTags.EXTENSION_FOR]: authentication_1.AuthenticationBindings.AUTHENTICATION_STRATEGY_EXTENSION_POINT_NAME,
        });
        this.projectRoot = __dirname;
        // Customize @loopback/boot Booter Conventions here
        this.bootOptions = {
            controllers: {
                // Customize ControllerBooter Conventions here
                dirs: ['controllers'],
                extensions: ['.controller.js'],
                nested: true,
            },
        };
    }
}
exports.Chmaldloopback4Application = Chmaldloopback4Application;
//# sourceMappingURL=application.js.map