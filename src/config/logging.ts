// Custom loggings helper fncs, simpler than morgan

const getTimeStamp = (): string => {
  return new Date().toISOString();
};

const showInfo = (namespace: string, msg: string, relatedObj?: object) => {
  if (relatedObj) {
    console.log(`[${getTimeStamp()}] [INFO] [${namespace}] ${msg}`, relatedObj);
  } else {
    console.log(`[${getTimeStamp()}] [INFO] [${namespace}] ${msg}`);
  }
};

const showError = (namespace: string, msg: string, relatedObj?: object) => {
  if (relatedObj) {
    console.log(`[${getTimeStamp()}] [ERROR] [${namespace}] ${msg}`, relatedObj);
  } else {
    console.log(`[${getTimeStamp()}] [ERROR] [${namespace}] ${msg}`);
  }
};

const showDebug = (namespace: string, msg: string, relatedObj?: object) => {
  if (relatedObj) {
    console.log(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${msg}`, relatedObj);
  } else {
    console.log(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${msg}`);
  }
};

const showWarn = (namespace: string, msg: string, relatedObj?: object) => {
  if (relatedObj) {
    console.log(`[${getTimeStamp()}] [WARN] [${namespace}] ${msg}`, relatedObj);
  } else {
    console.log(`[${getTimeStamp()}] [WARN] [${namespace}] ${msg}`);
  }
};

export default {
  info: showInfo,
  error: showError,
  debug: showDebug,
  warn: showWarn,
};
