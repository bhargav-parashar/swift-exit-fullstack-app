
const adminUser = {
    _id:"67a3950a04fbad8753fc0f18",
    username  : "admin",
    password  : "$2b$10$ycPMEJIV6FA4hJFdIgoAEO0d5Wru.MqscJ1L/73TK2EfJoL1H4uPy",
    createdAt : new Date("2025-02-05T16:42:51.005+00:00"),
    updatedAt : new Date("2025-02-05T16:42:51.005+00:00")
};

const roles = [
    {
        _id  : "67a4e1a0f087e933ca2a02b3",
        role : "admin"
    },
    {
        _id  : "67a4e1b8f087e933ca2a02b4",
        role : "employee"
    },
];

const permissions = [
    {
        _id: "67a4e267f087e933ca2a02b7",
        subject: "resignation",
        action: "submit"
    },
    {
        _id: "67a4e308f087e933ca2a02b9",
        subject: "resignation",
        action: "review"
    },
    {
        _id: "67a4e33df087e933ca2a02ba",
        subject: "resignation",
        action: "see_all"
    },
    {
        _id: "67a4e357f087e933ca2a02bb",
        subject: "response",
        action: "see_all"
    },
    {
        _id: "67a4e36ff087e933ca2a02bc",
        subject: "lwd",
        action: "update"
    }

];

const rolePersmissions = [
    {
        _id:"67a4e57cf087e933ca2a02c4",
        permissionId:"67a4e267f087e933ca2a02b7",
        roleId:"67a4e1b8f087e933ca2a02b4"
    },
    {
        _id:"67a4e593f087e933ca2a02c5",
        permissionId:"67a4e308f087e933ca2a02b9",
        roleId:"67a4e1a0f087e933ca2a02b3"
    },
    {
        _id:"67a4e5a5f087e933ca2a02c6",
        permissionId:"67a4e33df087e933ca2a02ba",
        roleId:"67a4e1a0f087e933ca2a02b3"
    },
    {
        _id:"67a4e5b6f087e933ca2a02c7",
        permissionId:"67a4e357f087e933ca2a02bb",
        roleId:"67a4e1a0f087e933ca2a02b3"
    },
    {
        _id:"67a4e5cbf087e933ca2a02c8",
        permissionId:"67a4e36ff087e933ca2a02bc",
        roleId:"67a4e1a0f087e933ca2a02b3"
    }
];

const questionnaire =[
    {
        _id: "67a859cb95eed2414d4ed1d6",
        question: "What factors contributed to your decision to resign?"
    },
    {
        _id: "67a85a9695eed2414d4ed1d7",
        question: "What might have been done to prevent you from leaving?"
    },
    {
        _id: "67a85afa95eed2414d4ed1d8",
        question: "How would you describe our workplace environment to someone considering working here?"
    },
    {
        _id: "67a85ccd95eed2414d4ed1d9",
        question: "How was your overall experience working for this company?"
    }
];


