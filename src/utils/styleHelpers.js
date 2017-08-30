
const statusMap = {
  success: 'green',
  warning: 'gold',
  danger: 'dark-red',
  primary: 'blue',
  normal: 'dark-gray',
};

export function getStatusColour(status) {
  const lower = status.toLowerCase();
  switch (lower) {
    case 'success':
    case 'warning':
    case 'danger':
    case 'primary':
      return statusMap[lower];
    default:
      return statusMap.normal;
  }
}

export function getSizeStyle(size) {
  const lower = size.toLowerCase();
  switch (lower) {
    case 'small':
      return 'f4';
    case 'x-small':
      return 'f5';
    case 'large':
      return 'f2';
    case 'x-large':
      return 'f1';
    default:
      return 'f3';
  }
}

export function getIconName(name) {
  return `fa-${name}`;
}
