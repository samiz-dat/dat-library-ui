
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
      return 'f5';
    case 'x-small':
      return 'f6';
    case 'large':
      return 'f3';
    case 'x-large':
      return 'f2';
    default:
      return 'f4';
  }
}

export function getIconName(name) {
  return `fa-${name}`;
}
