const navigation = () => {
  return [
    {
      title: 'Dashboard',
      path: '/home',
      icon: 'mdi:home-variant'
    },
    {
      title: 'Venues',
      path: '/venues',
      icon: 'mdi:table-of-contents'
    },
    {
      path: '/users',
      title: 'Users',
      icon: 'mdi:shield-outline'
    },
    {
      path: '/acl',
      action: 'read',
      subject: 'acl-page',
      title: 'User Accounts',
      icon: 'mdi:shield-outline'
    }
  ]
}

export default navigation
