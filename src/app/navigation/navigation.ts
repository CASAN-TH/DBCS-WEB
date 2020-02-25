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
                translate: 'ข้อมูลยุทธศาสตร์',
                type     : 'item',
                icon     : 'email',
                url      : '/strategic',
                
            },
            {
                id       : 'sample',
                title    : 'Sample',
                translate: 'ข้อมูลหมวดรายจ่าย',
                type     : 'item',
                icon     : 'email',
                url      : '/expenditure',
                
            },
            {
                id       : 'sample',
                title    : 'Sample',
                translate: 'ข้อมูลหน่วยงาน',
                type     : 'item',
                icon     : 'email',
                url      : '/department',
                
            },
            {
                id       : 'sample',
                title    : 'Sample',
                translate: 'ข้อมูลแผนงบประมาณ',
                type     : 'item',
                icon     : 'email',
                url      : '/estimateplan',
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
        translate: 'จัดทำคำของบประมาณ',
        type     : 'group',
        children : [
            {
                id       : 'estimate',
                title    : 'Estimate',
                translate: 'บันทึกคำของบประมาณ',
                type     : 'item',
                icon     : 'email',
                url      : '/estimate',
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
                translate: 'พิจารณาคำของบประมาณ',
                type     : 'item',
                icon     : 'email',
                url      : '/proposal',
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
                icon     : 'email',
                url      : '/sample2',
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
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/sample3',
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
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/sample4',
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
