'use strict';"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var lang_1 = require('angular2/src/facade/lang');
var async_1 = require('angular2/src/facade/async');
var core_1 = require('angular2/core');
var worker_render_1 = require('angular2/src/platform/worker_render');
var worker_render_common_1 = require('angular2/src/platform/worker_render_common');
var worker_render_common_2 = require('angular2/src/platform/worker_render_common');
exports.WORKER_SCRIPT = worker_render_common_2.WORKER_SCRIPT;
exports.WORKER_RENDER_PLATFORM = worker_render_common_2.WORKER_RENDER_PLATFORM;
exports.initializeGenericWorkerRenderer = worker_render_common_2.initializeGenericWorkerRenderer;
exports.WORKER_RENDER_APPLICATION_COMMON = worker_render_common_2.WORKER_RENDER_APPLICATION_COMMON;
var worker_render_2 = require('angular2/src/platform/worker_render');
exports.WORKER_RENDER_APPLICATION = worker_render_2.WORKER_RENDER_APPLICATION;
exports.WebWorkerInstance = worker_render_2.WebWorkerInstance;
var client_message_broker_1 = require('../src/web_workers/shared/client_message_broker');
exports.ClientMessageBroker = client_message_broker_1.ClientMessageBroker;
exports.ClientMessageBrokerFactory = client_message_broker_1.ClientMessageBrokerFactory;
exports.FnArg = client_message_broker_1.FnArg;
exports.UiArguments = client_message_broker_1.UiArguments;
var service_message_broker_1 = require('../src/web_workers/shared/service_message_broker');
exports.ReceivedMessage = service_message_broker_1.ReceivedMessage;
exports.ServiceMessageBroker = service_message_broker_1.ServiceMessageBroker;
exports.ServiceMessageBrokerFactory = service_message_broker_1.ServiceMessageBrokerFactory;
var serializer_1 = require('../src/web_workers/shared/serializer');
exports.PRIMITIVE = serializer_1.PRIMITIVE;
__export(require('../src/web_workers/shared/message_bus'));
/**
 * @deprecated Use WORKER_RENDER_APPLICATION
 */
exports.WORKER_RENDER_APP = worker_render_1.WORKER_RENDER_APPLICATION;
var router_providers_1 = require('angular2/src/web_workers/ui/router_providers');
exports.WORKER_RENDER_ROUTER = router_providers_1.WORKER_RENDER_ROUTER;
function workerRenderPlatform() {
    if (lang_1.isBlank(core_1.getPlatform())) {
        core_1.createPlatform(core_1.ReflectiveInjector.resolveAndCreate(worker_render_common_1.WORKER_RENDER_PLATFORM));
    }
    return core_1.assertPlatform(worker_render_common_1.WORKER_RENDER_PLATFORM_MARKER);
}
exports.workerRenderPlatform = workerRenderPlatform;
function bootstrapRender(workerScriptUri, customProviders) {
    var pf = core_1.ReflectiveInjector.resolveAndCreate(worker_render_common_1.WORKER_RENDER_PLATFORM);
    var app = core_1.ReflectiveInjector.resolveAndCreate([
        worker_render_1.WORKER_RENDER_APPLICATION,
        /* @ts2dart_Provider */ { provide: worker_render_common_1.WORKER_SCRIPT, useValue: workerScriptUri },
        lang_1.isPresent(customProviders) ? customProviders : []
    ], workerRenderPlatform().injector);
    // Return a promise so that we keep the same semantics as Dart,
    // and we might want to wait for the app side to come up
    // in the future...
    return async_1.PromiseWrapper.resolve(app.get(core_1.ApplicationRef));
}
exports.bootstrapRender = bootstrapRender;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2VyX3JlbmRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtMWJHZVFGT28udG1wL2FuZ3VsYXIyL3BsYXRmb3JtL3dvcmtlcl9yZW5kZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHFCQUFpQywwQkFBMEIsQ0FBQyxDQUFBO0FBQzVELHNCQUE2QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3pELHFCQVFPLGVBQWUsQ0FBQyxDQUFBO0FBQ3ZCLDhCQUF3QyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQzlFLHFDQUlPLDRDQUE0QyxDQUFDLENBQUE7QUFFcEQscUNBS08sNENBQTRDLENBQUM7QUFKbEQsNkRBQWE7QUFDYiwrRUFBc0I7QUFDdEIsaUdBQStCO0FBQy9CLG1HQUNrRDtBQUNwRCw4QkFBMkQscUNBQXFDLENBQUM7QUFBekYsOEVBQXlCO0FBQUUsOERBQThEO0FBQ2pHLHNDQUtPLGlEQUFpRCxDQUFDO0FBSnZELDBFQUFtQjtBQUNuQix3RkFBMEI7QUFDMUIsOENBQUs7QUFDTCwwREFDdUQ7QUFDekQsdUNBSU8sa0RBQWtELENBQUM7QUFIeEQsbUVBQWU7QUFDZiw2RUFBb0I7QUFDcEIsMkZBQ3dEO0FBQzFELDJCQUF3QixzQ0FBc0MsQ0FBQztBQUF2RCwyQ0FBdUQ7QUFDL0QsaUJBQWMsdUNBQXVDLENBQUMsRUFBQTtBQUV0RDs7R0FFRztBQUNVLHlCQUFpQixHQUFHLHlDQUF5QixDQUFDO0FBQzNELGlDQUFtQyw4Q0FBOEMsQ0FBQztBQUExRSx1RUFBMEU7QUFFbEY7SUFDRSxFQUFFLENBQUMsQ0FBQyxjQUFPLENBQUMsa0JBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLHFCQUFjLENBQUMseUJBQWtCLENBQUMsZ0JBQWdCLENBQUMsNkNBQXNCLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFDRCxNQUFNLENBQUMscUJBQWMsQ0FBQyxvREFBNkIsQ0FBQyxDQUFDO0FBQ3ZELENBQUM7QUFMZSw0QkFBb0IsdUJBS25DLENBQUE7QUFFRCx5QkFDSSxlQUF1QixFQUN2QixlQUF3RDtJQUMxRCxJQUFJLEVBQUUsR0FBRyx5QkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyw2Q0FBc0IsQ0FBQyxDQUFDO0lBQ3JFLElBQUksR0FBRyxHQUFHLHlCQUFrQixDQUFDLGdCQUFnQixDQUN6QztRQUNFLHlDQUF5QjtRQUN6Qix1QkFBdUIsQ0FBQyxFQUFDLE9BQU8sRUFBRSxvQ0FBYSxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUM7UUFDM0UsZ0JBQVMsQ0FBQyxlQUFlLENBQUMsR0FBRyxlQUFlLEdBQUcsRUFBRTtLQUNsRCxFQUNELG9CQUFvQixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsK0RBQStEO0lBQy9ELHdEQUF3RDtJQUN4RCxtQkFBbUI7SUFDbkIsTUFBTSxDQUFDLHNCQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMscUJBQWMsQ0FBQyxDQUFDLENBQUM7QUFDekQsQ0FBQztBQWZlLHVCQUFlLGtCQWU5QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpc1ByZXNlbnQsIGlzQmxhbmt9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge1Byb21pc2VXcmFwcGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2FzeW5jJztcbmltcG9ydCB7XG4gIEFwcGxpY2F0aW9uUmVmLFxuICBQbGF0Zm9ybVJlZixcbiAgUmVmbGVjdGl2ZUluamVjdG9yLFxuICBQcm92aWRlcixcbiAgZ2V0UGxhdGZvcm0sXG4gIGNyZWF0ZVBsYXRmb3JtLFxuICBhc3NlcnRQbGF0Zm9ybVxufSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7V09SS0VSX1JFTkRFUl9BUFBMSUNBVElPTn0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL3dvcmtlcl9yZW5kZXInO1xuaW1wb3J0IHtcbiAgV09SS0VSX1NDUklQVCxcbiAgV09SS0VSX1JFTkRFUl9QTEFURk9STSxcbiAgV09SS0VSX1JFTkRFUl9QTEFURk9STV9NQVJLRVJcbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL3dvcmtlcl9yZW5kZXJfY29tbW9uJztcblxuZXhwb3J0IHtcbiAgV09SS0VSX1NDUklQVCxcbiAgV09SS0VSX1JFTkRFUl9QTEFURk9STSxcbiAgaW5pdGlhbGl6ZUdlbmVyaWNXb3JrZXJSZW5kZXJlcixcbiAgV09SS0VSX1JFTkRFUl9BUFBMSUNBVElPTl9DT01NT05cbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL3dvcmtlcl9yZW5kZXJfY29tbW9uJztcbmV4cG9ydCB7V09SS0VSX1JFTkRFUl9BUFBMSUNBVElPTiwgV2ViV29ya2VySW5zdGFuY2V9IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS93b3JrZXJfcmVuZGVyJztcbmV4cG9ydCB7XG4gIENsaWVudE1lc3NhZ2VCcm9rZXIsXG4gIENsaWVudE1lc3NhZ2VCcm9rZXJGYWN0b3J5LFxuICBGbkFyZyxcbiAgVWlBcmd1bWVudHNcbn0gZnJvbSAnLi4vc3JjL3dlYl93b3JrZXJzL3NoYXJlZC9jbGllbnRfbWVzc2FnZV9icm9rZXInO1xuZXhwb3J0IHtcbiAgUmVjZWl2ZWRNZXNzYWdlLFxuICBTZXJ2aWNlTWVzc2FnZUJyb2tlcixcbiAgU2VydmljZU1lc3NhZ2VCcm9rZXJGYWN0b3J5XG59IGZyb20gJy4uL3NyYy93ZWJfd29ya2Vycy9zaGFyZWQvc2VydmljZV9tZXNzYWdlX2Jyb2tlcic7XG5leHBvcnQge1BSSU1JVElWRX0gZnJvbSAnLi4vc3JjL3dlYl93b3JrZXJzL3NoYXJlZC9zZXJpYWxpemVyJztcbmV4cG9ydCAqIGZyb20gJy4uL3NyYy93ZWJfd29ya2Vycy9zaGFyZWQvbWVzc2FnZV9idXMnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSBXT1JLRVJfUkVOREVSX0FQUExJQ0FUSU9OXG4gKi9cbmV4cG9ydCBjb25zdCBXT1JLRVJfUkVOREVSX0FQUCA9IFdPUktFUl9SRU5ERVJfQVBQTElDQVRJT047XG5leHBvcnQge1dPUktFUl9SRU5ERVJfUk9VVEVSfSBmcm9tICdhbmd1bGFyMi9zcmMvd2ViX3dvcmtlcnMvdWkvcm91dGVyX3Byb3ZpZGVycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiB3b3JrZXJSZW5kZXJQbGF0Zm9ybSgpOiBQbGF0Zm9ybVJlZiB7XG4gIGlmIChpc0JsYW5rKGdldFBsYXRmb3JtKCkpKSB7XG4gICAgY3JlYXRlUGxhdGZvcm0oUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmVBbmRDcmVhdGUoV09SS0VSX1JFTkRFUl9QTEFURk9STSkpO1xuICB9XG4gIHJldHVybiBhc3NlcnRQbGF0Zm9ybShXT1JLRVJfUkVOREVSX1BMQVRGT1JNX01BUktFUik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib290c3RyYXBSZW5kZXIoXG4gICAgd29ya2VyU2NyaXB0VXJpOiBzdHJpbmcsXG4gICAgY3VzdG9tUHJvdmlkZXJzPzogQXJyYXk8YW55IC8qVHlwZSB8IFByb3ZpZGVyIHwgYW55W10qLz4pOiBQcm9taXNlPEFwcGxpY2F0aW9uUmVmPiB7XG4gIHZhciBwZiA9IFJlZmxlY3RpdmVJbmplY3Rvci5yZXNvbHZlQW5kQ3JlYXRlKFdPUktFUl9SRU5ERVJfUExBVEZPUk0pO1xuICB2YXIgYXBwID0gUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmVBbmRDcmVhdGUoXG4gICAgICBbXG4gICAgICAgIFdPUktFUl9SRU5ERVJfQVBQTElDQVRJT04sXG4gICAgICAgIC8qIEB0czJkYXJ0X1Byb3ZpZGVyICovIHtwcm92aWRlOiBXT1JLRVJfU0NSSVBULCB1c2VWYWx1ZTogd29ya2VyU2NyaXB0VXJpfSxcbiAgICAgICAgaXNQcmVzZW50KGN1c3RvbVByb3ZpZGVycykgPyBjdXN0b21Qcm92aWRlcnMgOiBbXVxuICAgICAgXSxcbiAgICAgIHdvcmtlclJlbmRlclBsYXRmb3JtKCkuaW5qZWN0b3IpO1xuICAvLyBSZXR1cm4gYSBwcm9taXNlIHNvIHRoYXQgd2Uga2VlcCB0aGUgc2FtZSBzZW1hbnRpY3MgYXMgRGFydCxcbiAgLy8gYW5kIHdlIG1pZ2h0IHdhbnQgdG8gd2FpdCBmb3IgdGhlIGFwcCBzaWRlIHRvIGNvbWUgdXBcbiAgLy8gaW4gdGhlIGZ1dHVyZS4uLlxuICByZXR1cm4gUHJvbWlzZVdyYXBwZXIucmVzb2x2ZShhcHAuZ2V0KEFwcGxpY2F0aW9uUmVmKSk7XG59XG4iXX0=