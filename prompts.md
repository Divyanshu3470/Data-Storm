1. MongoServerError: E11000 duplicate key error collection: datahub.users index: email_1 dup key: { email: "divyanshu@gmail.com" }
    at InsertOneOperation.handleOk (D:\InternShip Projects\MONDO_DATA_HUB\node_modules\mongodb\lib\operations\insert.js:51:19)
    at executeOperationWithRetries (D:\InternShip Projects\MONDO_DATA_HUB\node_modules\mongodb\lib\operations\execute_operation.js:194:34)
    at process.processTicksAndRejections (node:internal/process/task_queues:103:5)
    at async executeOperation (D:\InternShip Projects\MONDO_DATA_HUB\node_modules\mongodb\lib\operations\execute_operation.js:83:16)
    at async Collection.insertOne (D:\InternShip Projects\MONDO_DATA_HUB\node_modules\mongodb\lib\collection.js:154:16)
    at async model.$__save (D:\InternShip Projects\MONDO_DATA_HUB\node_modules\mongoose\lib\model.js:434:16)
    at async maybeTracedSave (D:\InternShip Projects\MONDO_DATA_HUB\node_modules\mongoose\lib\model.js:675:7)
    at async model.create (D:\InternShip Projects\MONDO_DATA_HUB\node_modules\mongoose\lib\model.js:2763:5)
    at async createUser (file:///D:/InternShip%20Projects/MONDO_DATA_HUB/controllers/userController.js:4:16)
   Fix the error.

2. }
==> Running 'npm start'
> data-hub@1.0.0 start
> node server.js
◇ injected env (0) from .env // tip: ⌘ override existing { override: true }
Server Running on 10000
ValidationError: User validation failed: email: Path `email` is required., name: Path `name` is required.
    at model.validate (/opt/render/project/src/node_modules/mongoose/lib/document.js:2880:36)
    at process.processTicksAndRejections (node:internal/process/task_queues:104:5)
    at async model.$__save (/opt/render/project/src/node_modules/mongoose/lib/model.js:399:7)
    at async maybeTracedSave (/opt/render/project/src/node_modules/mongoose/lib/model.js:675:7)
    at async model.create (/opt/render/project/src/node_modules/mongoose/lib/model.js:2763:5)
    at async createUser (file:///opt/render/project/src/controllers/userController.js:4:16)
MongooseServerSelectionError: Could not connect to any servers in your MongoDB Atlas cluster. One common reason is that you're trying to access the database from an IP that isn't whitelisted. Make sure your current IP address is on your Atlas cluster's IP whitelist: https://www.mongodb.com/docs/atlas/security-whitelist/
    at _handleConnectionErrors (/opt/render/project/src/node_modules/mongoose/lib/connection.js:1180:11)
    at NativeConnection.openUri (/opt/render/project/src/node_modules/mongoose/lib/connection.js:1111:11)
    at async connectDB (file:///opt/render/project/src/config/db.js:5:5) {
  errorLabelSet: Set(0) {},
  reason: TopologyDescription {
    type: 'ReplicaSetNoPrimary',
    servers: Map(3) {
      'ac-tvthmxv-shard-00-02.s6lyllh.mongodb.net:27017' => [ServerDescription],
      'ac-tvthmxv-shard-00-00.s6lyllh.mongodb.net:27017' => [ServerDescription],
      'ac-tvthmxv-shard-00-01.s6lyllh.mongodb.net:27017' => [ServerDescription]
    },
    stale: false,
    compatible: true,
    heartbeatFrequencyMS: 10000,
    localThresholdMS: 15,
    setName: 'atlas-aem0ac-shard-0',
    maxElectionId: null,
    maxSetVersion: null,
    commonWireVersion: 0,
    logicalSessionTimeoutMinutes: null
  },
  code: undefined,
  cause: TopologyDescription {
    type: 'ReplicaSetNoPrimary',
    servers: Map(3) {
      'ac-tvthmxv-shard-00-02.s6lyllh.mongodb.net:27017' => [ServerDescription],
      'ac-tvthmxv-shard-00-00.s6lyllh.mongodb.net:27017' => [ServerDescription],
      'ac-tvthmxv-shard-00-01.s6lyllh.mongodb.net:27017' => [ServerDescription]
    },
    stale: false,
    compatible: true,
    heartbeatFrequencyMS: 10000,
    localThresholdMS: 15,
    setName: 'atlas-aem0ac-shard-0',
    maxElectionId: null,
    maxSetVersion: null,
    commonWireVersion: 0,
    logicalSessionTimeoutMinutes: null
  }
}
==> Running 'npm start'
> data-hub@1.0.0 start
> node server.js
◇ injected env (0) from .env // tip: ⌘ multiple files { path: ['.env.local', '.env'] }
Server Running on 10000
MongooseServerSelectionError: Could not connect to any servers in your MongoDB Atlas cluster. One common reason is that you're trying to access the database from an IP that isn't whitelisted. Make sure your current IP address is on your Atlas cluster's IP whitelist: https://www.mongodb.com/docs/atlas/security-whitelist/
    at _handleConnectionErrors (/opt/render/project/src/node_modules/mongoose/lib/connection.js:1180:11)
    at NativeConnection.openUri (/opt/render/project/src/node_modules/mongoose/lib/connection.js:1111:11)
    at async connectDB (file:///opt/render/project/src/config/db.js:5:5) {
  errorLabelSet: Set(0) {},
  reason: TopologyDescription {
    type: 'ReplicaSetNoPrimary',
    servers: Map(3) {
      'ac-tvthmxv-shard-00-01.s6lyllh.mongodb.net:27017' => [ServerDescription],
      'ac-tvthmxv-shard-00-02.s6lyllh.mongodb.net:27017' => [ServerDescription],
      'ac-tvthmxv-shard-00-00.s6lyllh.mongodb.net:27017' => [ServerDescription]
    },
    stale: false,
    compatible: true,
    heartbeatFrequencyMS: 10000,
    localThresholdMS: 15,
    setName: 'atlas-aem0ac-shard-0',
    maxElectionId: null,
    maxSetVersion: null,
    commonWireVersion: 0,
    logicalSessionTimeoutMinutes: null
  },
  code: undefined,
  cause: TopologyDescription {
    type: 'ReplicaSetNoPrimary',
    servers: Map(3) {
      'ac-tvthmxv-shard-00-01.s6lyllh.mongodb.net:27017' => [ServerDescription],
      'ac-tvthmxv-shard-00-02.s6lyllh.mongodb.net:27017' => [ServerDescription],
      'ac-tvthmxv-shard-00-00.s6lyllh.mongodb.net:27017' => [ServerDescription]
    },
    stale: false,
    compatible: true,
    heartbeatFrequencyMS: 10000,
    localThresholdMS: 15,
    setName: 'atlas-aem0ac-shard-0',
    maxElectionId: null,
    maxSetVersion: null,
    commonWireVersion: 0,
    logicalSessionTimeoutMinutes: null
  }
}
==> Running 'npm start'
> data-hub@1.0.0 start
> node server.js
◇ injected env (0) from .env // tip: ⌘ suppress logs { quiet: true }
Server Running on 10000
MongooseServerSelectionError: Could not connect to any servers in your MongoDB Atlas cluster. One common reason is that you're trying to access the database from an IP that isn't whitelisted. Make sure your current IP address is on your Atlas cluster's IP whitelist: https://www.mongodb.com/docs/atlas/security-whitelist/
    at _handleConnectionErrors (/opt/render/project/src/node_modules/mongoose/lib/connection.js:1180:11)
    at NativeConnection.openUri (/opt/render/project/src/node_modules/mongoose/lib/connection.js:1111:11)
    at async connectDB (file:///opt/render/project/src/config/db.js:5:5) {
  errorLabelSet: Set(0) {},
  reason: TopologyDescription {
    type: 'ReplicaSetNoPrimary',
    servers: Map(3) {
      'ac-tvthmxv-shard-00-02.s6lyllh.mongodb.net:27017' => [ServerDescription],
      'ac-tvthmxv-shard-00-00.s6lyllh.mongodb.net:27017' => [ServerDescription],
      'ac-tvthmxv-shard-00-01.s6lyllh.mongodb.net:27017' => [ServerDescription]
    },
    stale: false,
    compatible: true,
    heartbeatFrequencyMS: 10000,
    localThresholdMS: 15,
    setName: 'atlas-aem0ac-shard-0',
    maxElectionId: null,
    maxSetVersion: null,
    commonWireVersion: 0,
    logicalSessionTimeoutMinutes: null
  },
  code: undefined,
  cause: TopologyDescription {
    type: 'ReplicaSetNoPrimary',
    servers: Map(3) {
      'ac-tvthmxv-shard-00-02.s6lyllh.mongodb.net:27017' => [ServerDescription],
      'ac-tvthmxv-shard-00-00.s6lyllh.mongodb.net:27017' => [ServerDescription],
      'ac-tvthmxv-shard-00-01.s6lyllh.mongodb.net:27017' => [ServerDescription]
    },
    stale: false,
    compatible: true,
    heartbeatFrequencyMS: 10000,
    localThresholdMS: 15,
    setName: 'atlas-aem0ac-shard-0',
    maxElectionId: null,
    maxSetVersion: null,
    commonWireVersion: 0,
    logicalSessionTimeoutMinutes: null
  }
}
==> Running 'npm start'
> data-hub@1.0.0 start
> node server.js
◇ injected env (0) from .env // tip: ⌁ auth for agents [www.vestauth.com]
Server Running on 10000
MongooseServerSelectionError: Could not connect to any servers in your MongoDB Atlas cluster. One common reason is that you're trying to access the database from an IP that isn't whitelisted. Make sure your current IP address is on your Atlas cluster's IP whitelist: https://www.mongodb.com/docs/atlas/security-whitelist/
    at _handleConnectionErrors (/opt/render/project/src/node_modules/mongoose/lib/connection.js:1180:11)
    at NativeConnection.openUri (/opt/render/project/src/node_modules/mongoose/lib/connection.js:1111:11)
    at async connectDB (file:///opt/render/project/src/config/db.js:5:5) {
  errorLabelSet: Set(0) {},
  reason: TopologyDescription {
    type: 'ReplicaSetNoPrimary',
    servers: Map(3) {
      'ac-tvthmxv-shard-00-00.s6lyllh.mongodb.net:27017' => [ServerDescription],
      'ac-tvthmxv-shard-00-01.s6lyllh.mongodb.net:27017' => [ServerDescription],
      'ac-tvthmxv-shard-00-02.s6lyllh.mongodb.net:27017' => [ServerDescription]
    },
    stale: false,
    compatible: true,
    heartbeatFrequencyMS: 10000,
    localThresholdMS: 15,
    setName: 'atlas-aem0ac-shard-0',
    maxElectionId: null,
    maxSetVersion: null,
    commonWireVersion: 0,
    logicalSessionTimeoutMinutes: null
  },
  code: undefined,
  cause: TopologyDescription {
    type: 'ReplicaSetNoPrimary',
    servers: Map(3) {
      'ac-tvthmxv-shard-00-00.s6lyllh.mongodb.net:27017' => [ServerDescription],
      'ac-tvthmxv-shard-00-01.s6lyllh.mongodb.net:27017' => [ServerDescription],
      'ac-tvthmxv-shard-00-02.s6lyllh.mongodb.net:27017' => [ServerDescription]
    },
    stale: false,
    compatible: true,
    heartbeatFrequencyMS: 10000,
    localThresholdMS: 15,
    setName: 'atlas-aem0ac-shard-0',
    maxElectionId: null,
    maxSetVersion: null,
    commonWireVersion: 0,
    logicalSessionTimeoutMinutes: null
  }
}
What is this error?

3. How to allow every IP address access to MongoDB atlas
