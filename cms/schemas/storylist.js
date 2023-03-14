export default {
    name: 'storylist',
    title: 'Storylists',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Título',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'description',
            title: 'Descripción',
            type: 'text',
        },
        {
            name: 'language',
            title: 'Idioma',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Imagen',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'stories',
            title: 'Historias',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'story' } }],
        },
    ],
};
