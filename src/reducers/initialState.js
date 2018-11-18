export default {
    appMeta: {
        version: '',
        name: 'Note Box',
        headline: 'An Innovative Way to Organize Your Thoughts and Knowledge'
    },
    user: {
    },
    createNoteView: {
        note: {
            title: '',
            noteContent: '',
            tags: []
        },
        status: '',
        errorCode: 0
    },
    createNoteBoxView: {
        noteBox: {
            title: '',
            description: '',
            tags: []
        },
        status: '',
        errorCode: 0
    },
    noteBoxesView: {
        noteBoxes: [],
        status: '',
        errorCode: 0
    },
    noteBoxView: {
        openNoteBox: {
            noteBox: {},
            notes: []
        },
        status: '',
        errorCode: 0
    }
};
