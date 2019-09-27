export const enum DescriptorMode {
  TEST_MODE = 'testMode',
  RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount',
  DAEMON = '@@saga-injector/daemon',
  ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount',
}
