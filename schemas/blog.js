export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'content',
            type: 'string',
            title: 'Content'
        },
        {
            title: 'Launch Scheduled At',
            name: 'launchAt',
            type: 'datetime',
            options: {
                dateFormat: 'MM-DD',
                timeFormat: 'HH:mm',
                timeStep: 5,
                calendarTodayLabel: 'Today'
              }
        },
    ]
}