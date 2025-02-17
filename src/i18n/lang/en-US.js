import enUS from 'naive-ui/lib/locales/common/enUS.js';
const message = {
  common: {
    query: 'Query',
    status: 'Status',
    yes: 'Yes',
    no: 'No',
    enabled: 'Enabled',
    disabled: 'Disabled',
    confirm: 'Confirm',
    title: 'Title',
    return: 'Return',
    back: 'Back',
    confirm_action: 'Do you want to confirm the action?',
    delete: 'Delete',
    edit: 'Edit',
    detail: 'Detail',
    history: 'History',
    operation: 'Operation',
    clone: 'Clone',
    updatedtime: 'Updated Time',
    recover: 'Recover',
    request_fail: 'Request Fail',
    refresh: 'Refresh',
    total: 'Total',
    add: 'Add',
    preInput: 'Input ',
    join: ' ',
    whitelist: 'Whitelist',
    blacklist: 'Blacklist',
    all: 'All',
    part: 'Part',
    permission: 'permission',
    submitSuccess: 'Submit success',
    success: 'Success',
    home: 'Home'
  },
  user: {
    name: 'User',
    username: 'Username',
    nickname: 'Nickname',
    password: 'Password',
    resetPassword: 'Reset password',
    list: 'User list',
    gmtCreate: 'CreateTime',
    gmtModified: 'ModifiedTime',
    roles: 'Roles',
    enable: 'Enable'
  },
  menu: {
    index: 'Index',
    app_management: 'ExecutorManagement',
    app_list: 'AppList',
    job_management: 'JobManagement',
    job_list: 'JobList',
    job_task_list: 'JobTaskList',
    system_management: 'System',
    system_monitor: 'Monitor',
    about: 'About'
  },
  namespace: {
    namespace: 'Namespace',
    the_namespace_id_has_been_copied: 'The namespace id has been copied!',
    namespaceName: 'Namespace Name',
    namespaceId: 'Namespace Id',
    new_namespace: 'New Namespace',
    add_namespace: 'Add Namespace',
    edit_namespace: 'Edit Namespace',
    retain_space: 'Retain Namespace',
    confirm_delete_info:
      "Are you sure you want to delete the '<%:=name%>'(ID: <%:=id%>) namespace?",
    namespaceId_or: 'Namespace Id,null then auto create'
  },
  about: {
    intro_title: 'System introduction',
    version_title: 'System version',
    user_title: 'Current user'
  },
  app: {
    name: 'app name',
    label: 'app label',
    inputName: 'input app name',
    searchName: 'search app name(support fuzzy query)',
    instanceAddrs: 'instance address list',
    confirm_delete_action:
      'Are you sure you want to delete the application named <%:=appName%>?'
  },
  job: {
    id: 'JobID',
    appName: 'app name',
    description: 'job description',
    scheduleType: 'schedule type',
    cronValue: 'cron value',
    delaySecond: 'delay second',
    intervalSecond: 'interval second',
    runMode: 'run mode',
    handleName: 'handle name',
    triggerParam: 'trigger param',
    routerStrategy: 'router strategy',
    pastDueStrategy: 'past due strategy',
    blockingStrategy: 'blocking strategy',
    timeoutSecond: 'timeout second',
    tryTimes: 'try times',
    confirm_delete_action:
      'Are you sure you want to delete the job named <%:=appName%>?',
    task_list: 'Task list',
    enableStatus: 'EnableStatus',
    types: {
      scheduleType: {
        none: 'None',
        cron: 'Cron',
        interval: 'Interval',
        delay: 'Delay'
      },
      runMode: {
        bean: 'Bean',
        glueGroovy: 'Glue Groovy',
        glueShell: 'Glue Shell',
        gluePython: 'Glue Python',
        gluePhp: 'Glue PHP',
        glueNodejs: 'Glue Node.js',
        gluePowerShell: 'Glue PowerShell'
      },
      routerStrategy: {
        first: 'First',
        last: 'Last',
        roundRobin: 'Round Robin',
        random: 'Random',
        consistentHash: 'Consistent Hash',
        shardingBroadcast: 'Sharding Broadcast'
      },
      pastDueStrategy: {
        default: 'Default',
        ignore: 'Ignore',
        execute: 'Execute'
      },
      executorBlockStrategy: {
        serialExecution: 'Serial Execution',
        discardLater: 'Discard Later',
        coverEarly: 'Cover Early',
        other: 'Other'
      }
    }
  },
  error: {
    NO_PERMISSION: 'NO_PERMISSION',
    NO_NAMESPACE_PERMISSION: 'NO_NAMESPACE_PERMISSION',
    SYSTEM_ERROR: 'SYSTEM_ERROR'
  }
};
export default {
  ...message,
  ...enUS
};
