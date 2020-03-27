import { Link as RouterLink } from 'react-router-dom';

export const isExternalUrl = url => {
  return /^https?:[/]{2}/.test(url);
}

export const switchRouterLinkProps = url => {
  const external = isExternalUrl(url);
  return {
    component: !external ? RouterLink : undefined, 
    to: !external ? url : undefined, 
    href: external ? url : undefined, 
  }
}