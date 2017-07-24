
export function getStatusStyle(status) {
  const lower = status.toLowerCase();
  switch (lower) {
    case 'success':
    case 'warning':
    case 'danger':
    case 'primary':
      return lower;
    default:
      return 'normal';
  }
}

export function getSizeStyle(size) {
  const lower = size.toLowerCase();
  switch (lower) {
    case 'small':
      return 's';
    case 'x-small':
      return 'xs';
    case 'large':
      return 'l';
    case 'x-large':
      return 'xl';
    default:
      return undefined;
  }
}

export function getIconName(name) {
  return `fa-${name}`;
}
