import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'ข้อมูลพื้นฐาน',
        type     : 'group',
        children : [
            {
                id       : 'sample',
                title    : 'Sample',
                translate: 'ข้อมูลข้อมูลพื้นฐาน',
                type     : 'item',
                icon     : 'description',
                url      : '/strategic',
                
            }
        ]
    },
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'จัดทำคำของบประมาณ',
        type     : 'group',
        children : [
            {
                id       : 'estimate',
                title    : 'Estimate',
                translate: 'บันทึกคำของบประมาณ',
                type     : 'item',
                icon     : 'assignment',
                url      : '/proposal',
                badge    : {
                    title    : '25',
                    translate: '3',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            },
            {
                id       : 'sample',
                title    : 'Sample',
                translate: 'ส่ง สงป',
                type     : 'item',
                icon     : 'account_balance',
                url      : '/project',
                badge    : {
                    title    : '25',
                    translate: '3',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            }
        ]
    },
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'จัดสรรงบประมาณ',
        type     : 'group',
        children : [
            {
                id       : 'sample',
                title    : 'Sample',
                translate: 'จัดสรรงบประมาณ',
                type     : 'item',
                icon     : 'call_split',
                url      : '/allocate',
                badge    : {
                    title    : '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            },
            {
                id       : 'sample',
                title    : 'Sample',
                translate: 'โอนเปลี่ยนแปลงงบประมาณ',
                type     : 'item',
                icon     : 'call_split',
                url      : '/transfer',
                badge    : {
                    title    : '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            }
        ]
    },
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'บริหารโครงการ',
        type     : 'group',
        children : [
            {
                id       : 'sample',
                title    : 'Sample',
                translate: 'บริหารโครงการ',
                type     : 'item',
                icon     : 'event_note',
                url      : '/manage',
                badge    : {
                    title    : '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            }
        ]
    },
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'รายงงานความคืบหน้า',
        type     : 'group',
        children : [
            {
                id       : 'sample',
                title    : 'Sample',
                translate: 'รายงงานความคืบหน้า',
                type     : 'item',
                icon     : 'insert_chart',
                url      : '/report',
                badge    : {
                    title    : '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            }
        ]
    }

];
