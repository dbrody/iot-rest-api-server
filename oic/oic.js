exports.parseRes = function(payload) {
  console.log(payload);

  var resource = payload.resource;
  var o = {}; // resource object according to the OIC core spec.
  var link = {};
  var links = [];

  if (typeof resource.id.deviceId != "undefined")
    o.di = resource.id.deviceId;

  if (typeof resource.id.path != "undefined")
    link.href = resource.id.path;

  // TODO: collect all ...
  if (typeof resource.resourceTypes[0] != "undefined")
    link.rt = resource.resourceTypes[0];

  if (typeof resource.interfaces[0] != "undefined")
    link.if = resource.interfaces[0];

  links.push(link);
  o.links = links;

  console.log(JSON.stringify(o));

  return o;
}

exports.parseDevice = function(payload) {
  console.log(payload);

  var device = payload.device;
  var o = {};

  if (typeof device.uuid != "undefined")
    o.di = device.uuid;

  if (typeof device.name != "undefined")
    o.n = device.name;

  if (typeof device.coreSpecVersion != "undefined")
    o.icv = device.coreSpecVersion;

  if (typeof device.dataModelVersion != "undefined")
    o.dmv = device.dataModelVersion;

  console.log(JSON.stringify(o));

  return o;
}

exports.parsePlatform = function(platformInfo) {
  var o = {};

  console.log(platformInfo);
  var info = platformInfo.platform;

  if (typeof info.id != "undefined")
    o.pi = info.id;

  if (typeof info.manufacturerName != "undefined")
    o.mnmn = info.manufacturerName;

  if (typeof info.manufacturerUrl != "undefined")
    o.mnml = info.manufacturerUrl;

  if (typeof info.model != "undefined")
    o.mnmo = info.model;

  if (typeof info.manufactureDate != "undefined")
    o.mndt = info.manufactureDate;

  if (typeof info.platformVersion != "undefined")
    o.mnpv = info.platformVersion;

  if (typeof info.osVersion != "undefined")
    o.mnos = info.osVersion;

  if (typeof info.hardwareVersion != "undefined")
    o.mnhw = info.hardwareVersion;

  if (typeof info.firmwareVersion != "undefined")
    o.mnfv = info.firmwareVersion;

  if (typeof info.supportUrl != "undefined")
    o.mnsl = info.supportUrl;

  if (typeof info.systemTime != "undefined")
    o.st = info.systemTime;

  console.log(JSON.stringify(o));

  return o;
}

exports.parseResource = function(payload) {
  var o = {};

  console.log(payload);

  if (typeof payload.uri != "undefined")
    o.href = payload.uri;

  if (typeof payload.properties != "undefined")
    o.properties = payload.properties;

  var json = JSON.stringify(o);

  if (typeof payload != "undefined")
    console.log(json);

  return json;
}
