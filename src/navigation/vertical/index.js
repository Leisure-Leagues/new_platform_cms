const navigation = () => {
  return [
    {
      title: 'Dashboard',
      path: '/',
      icon: 'mdi:home-variant'
    },
    {
      title: 'Tournaments',
      path: '/tournaments',
      icon: 'mdi:tournament'
    },
    {
      title: 'Venues',
      path: '/venues',
      icon: 'mdi:stadium'
    },
    {
      path: '/users',
      title: 'Users',
      icon: 'mdi:person'
    },
    {
      path: '#',
      title: 'Teams',
      icon: 'mdi:account-group'
    },
    {
      title: 'Franchises',
      path: '#',
      icon: 'mdi:home-group'
    },
    {
      path: '#',
      title: 'Reporting',
      icon: 'mdi:file-cloud',
      children: [
        {
          title: 'Audit Report',
          path: '#'
        },
        {
          title: 'Financial Report',
          path: '#'
        },
        {
          title: 'Staff Dashboard',
          path: '#'
        },
        {
          title: 'Weekly Fee Changes',
          path: '#'
        },
        {
          title: 'Payments Log',
          path: '#'
        },
        {
          title: 'Invoices',
          path: '#'
        }
      ]
    },

    {
      path: '#',
      title: 'Emails',
      icon: 'mdi:email-outline',
      children: [
        {
          title: 'Send Email',
          path: '#'
        },
        {
          title: 'Templates',
          path: '#'
        },
        {
          title: 'Campaigns',
          path: '#'
        }
      ]
    },
    {
      title: 'Site Settings',
      icon: 'mdi:cogs',
      children: [
        {
          title: 'Design & Style',
          path: '#'
        },
        {
          title: 'Content Pages',
          path: '#'
        },
        {
          title: 'Translations',
          path: '#'
        },
        {
          title: 'Fixtures',
          path: '#'
        },
        {
          title: 'Gallery & Videos',
          path: '#'
        }
      ]
    },

    {
      path: '#',
      title: 'Support Center',
      icon: 'mdi:face-agent'
    }
  ]
}

export default navigation
