/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'sym-page3',
                            symbolName: 'sym-page3',
                            type: 'rect',
                            rect: ['0', '0', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'sym-page4',
                            symbolName: 'sym-page4',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'sym-page5',
                            symbolName: 'sym-page5',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'sym-page6',
                            symbolName: 'sym-page6',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'sym-logo',
                            symbolName: 'sym-logo',
                            type: 'rect',
                            rect: ['-198px', '-97px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.24088','0.24088']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1024px', '768px', 'auto', 'auto'],
                            sizeRange: ['','1024px','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 8164.25,
                    autoPlay: true,
                    data: [
                        [
                            "eid9",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sym-page6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sym-page4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid7",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sym-page5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${sym-page3}",
                            '0',
                            '1'
                        ],
                            [ "eid5", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${sym-page4}', [] ] ],
                            [ "eid8", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${sym-page5}', [] ] ],
                            [ "eid10", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${sym-page6}', [] ] ]
                    ]
                }
            },
            "sym-page6-popup": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '20px', '563px', '223px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            fill: ['rgba(255,255,255,1.00)'],
                            id: 'RoundRect2',
                            stroke: [1, 'rgba(0,0,255,1.00)', 'solid'],
                            type: 'rect',
                            boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1.00)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', ''],
                            type: 'text',
                            id: 'Text7',
                            text: '一项包括3项研究的汇总分析，其中2项为成人（15-85岁）研究，1项为儿童（6-14岁）研究，分别纳入436、374和245名慢性哮喘患者，这些患者已经完成双盲、安慰剂对照研究，并分别进入3项扩展性研究，接受口服孟鲁司特（成人10mg，儿童5mg咀嚼片，每日1次）或ICS（成人倍氯米松200μg，每日2次；儿童100μg，每日3次或其他ICS当量）治疗。成人双盲研究为期37周，成人开放性研究为期156周，儿童开放性研究为期112周。儿童研究的主要重点为FEV1和生活质量（9-14岁儿童）。',
                            align: 'left',
                            rect: ['15px', '49px', '541px', '138px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym-page2-popup-close',
                            symbolName: 'sym-page2-popup-close',
                            cursor: 'pointer',
                            rect: ['536', '0', '38', '38', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '574px', '187px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "sym-page6-button": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '89px', '29px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(16,2,247,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(2, 152, 202)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text6',
                            text: '研究设计',
                            align: 'left',
                            rect: ['9px', '4px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '89px', '29px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "sym-page4-popup": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '20px', '563px', '215px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)'],
                            id: 'RoundRect2',
                            stroke: [1, 'rgba(0,0,255,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1.00)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', ''],
                            type: 'text',
                            id: 'Text7',
                            text: 'MOSAIC研究是一项多中心、随机、双盲、双模拟、平行分组的非劣效研究，旨在比较口服孟鲁司特5mg qd与吸入氟替卡松100μg bid对哮喘无急救天数的改善。研究共纳入994例6-14岁的轻度持续性哮喘患儿，4周单盲、安慰剂导入期后，患者随机接受口服孟鲁司特5mg qd（若患者年龄满15岁，给予10mg qd, n=495）或吸入氟替卡松100μg bid（n=449）治疗12个月。主要研究终点为1年中哮喘无急救天数比例。若95%CI的下线在-7%以上，则认为孟鲁司特非劣效于氟替卡松。',
                            align: 'left',
                            rect: ['15px', '49px', '541px', '138px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym-page2-popup-close',
                            symbolName: 'sym-page2-popup-close',
                            cursor: 'pointer',
                            rect: ['536', '0', '38', '38', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '574px', '187px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "sym-6": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '48px', '48px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect4',
                            stroke: [1, 'rgb(0, 0, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(191,239,251,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '500', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text11',
                            text: '6',
                            align: 'left',
                            rect: ['15px', '7px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '48px', '48px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "sym-9": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '48px', '48px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect4',
                            stroke: [1, 'rgb(0, 0, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(191,239,251,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '500', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text11',
                            text: '9',
                            align: 'left',
                            rect: ['15px', '7px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '48px', '48px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "sym-page5-button": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '89px', '29px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(16,2,247,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(2, 152, 202)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text6',
                            text: '研究设计',
                            align: 'left',
                            rect: ['9px', '4px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '89px', '29px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "sym-1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '48px', '48px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect4',
                            stroke: [1, 'rgb(0, 0, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(191,239,251,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '500', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text11',
                            text: '1',
                            align: 'left',
                            rect: ['15px', '7px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '48px', '48px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "sym-page3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            id: 'page3-bg',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/page3-bg.png', '0px', '0px']
                        },
                        {
                            rect: ['346px', '74px', '329px', '89px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect3',
                            stroke: [1, 'rgb(0, 0, 255)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(10,26,252,1.00)']
                        },
                        {
                            rect: ['432px', '97px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [40, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap'],
                            id: 'Text9',
                            text: '调研问卷',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['96px', '220px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1.00)', '500', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap'],
                            id: 'Text10',
                            text: '您认可孟鲁司特纳在轻度持续性哮喘治疗中与ICS疗效相当吗？',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            type: 'rect',
                            id: 'sym-1',
                            symbolName: 'sym-1',
                            cursor: 'pointer',
                            rect: ['218px', '336px', '48', '48', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym-10',
                            symbolName: 'sym-10',
                            cursor: 'pointer',
                            rect: ['758px', '336px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym-2',
                            symbolName: 'sym-2',
                            cursor: 'pointer',
                            rect: ['278px', '336px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym-3',
                            symbolName: 'sym-3',
                            cursor: 'pointer',
                            rect: ['338px', '336px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym-4',
                            symbolName: 'sym-4',
                            cursor: 'pointer',
                            rect: ['398px', '336px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym-5',
                            symbolName: 'sym-5',
                            cursor: 'pointer',
                            rect: ['458px', '336px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym-6',
                            symbolName: 'sym-6',
                            cursor: 'pointer',
                            rect: ['518px', '336px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym-7',
                            symbolName: 'sym-7',
                            cursor: 'pointer',
                            rect: ['578px', '336px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym-8',
                            symbolName: 'sym-8',
                            cursor: 'pointer',
                            rect: ['638px', '336px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym-9',
                            symbolName: 'sym-9',
                            cursor: 'pointer',
                            rect: ['698px', '336px', null, null, 'auto', 'auto']
                        },
                        {
                            rect: ['85px', '343px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '500', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            id: 'Text12',
                            text: '不是',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['870', '343px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '500', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            id: 'Text13',
                            text: '是',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            type: 'rect',
                            id: 'sym-page3-button',
                            symbolName: 'sym-page3-button',
                            cursor: 'pointer',
                            rect: ['431', '460', '160', '48', 'auto', 'auto']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/page3.mp3'],
                            id: 'page3',
                            rect: ['302', '328', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1024px', '768px']
                        }
                    }
                },
                timeline: {
                    duration: 8164.25,
                    autoPlay: true,
                    data: [
                            [ "eid276", "trigger", 1000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${page3}', [] ] ]
                    ]
                }
            },
            "sym-5": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '48px', '48px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect4',
                            stroke: [1, 'rgb(0, 0, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(191,239,251,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '500', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text11',
                            text: '5',
                            align: 'left',
                            rect: ['15px', '7px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '48px', '48px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "sym-8": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '48px', '48px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect4',
                            stroke: [1, 'rgb(0, 0, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(191,239,251,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '500', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text11',
                            text: '8',
                            align: 'left',
                            rect: ['15px', '7px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '48px', '48px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "sym-page3-button": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '160px', '48px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect5',
                            stroke: [1, 'rgb(0, 0, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,34,242,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(255,255,255,1.00)', '500', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text14',
                            text: '提   交',
                            align: 'left',
                            rect: ['46px', '7px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '160px', '48px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "sym-2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '48px', '48px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect4',
                            stroke: [1, 'rgb(0, 0, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(191,239,251,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '500', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text11',
                            text: '2',
                            align: 'left',
                            rect: ['15px', '7px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '48px', '48px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "sym-page2-popup-close": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '38px', '38px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [1, 'rgb(0, 0, 255)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,173,0,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text8',
                            text: 'X',
                            align: 'left',
                            rect: ['12px', '8px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '38px', '38px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "sym-page5": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            id: 'page3-bg3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/page3-bg.png', '0px', '0px']
                        },
                        {
                            rect: ['161px', '122px', '105px', '290px', 'auto', 'auto'],
                            id: 'left-kid2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/left-kid.png', '0px', '0px']
                        },
                        {
                            rect: ['783px', '65px', '137px', '375px', 'auto', 'auto'],
                            id: 'right-kid3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/right-kid.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text16',
                            text: '5. Szefler SJ, et al. J Allergy Clin Immunol 2007;120(5):1043-1050.',
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', ''],
                            display: 'block',
                            rect: ['200px', '547px', '521px', '44px', 'auto', 'auto'],
                            opacity: '0',
                            align: 'left'
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'image',
                            id: 'page5-chart',
                            display: 'none',
                            rect: ['200px', '119px', '624px', '409px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/page5-chart.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['293px', '228px', '485px', '201px', 'auto', 'auto'],
                            display: 'block',
                            id: 'page5-line',
                            clip: 'rect(0px 0px 201px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/page5-line.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['298px', '228', '485px', '201px', 'auto', 'auto'],
                            id: 'page5-desc',
                            opacity: '0',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/page5-desc.png', '0px', '0px']
                        },
                        {
                            rect: ['733px', '547px', null, null, 'auto', 'auto'],
                            id: 'sym-page5-button',
                            symbolName: 'sym-page5-button',
                            display: 'block',
                            opacity: '0',
                            cursor: 'pointer',
                            type: 'rect'
                        },
                        {
                            rect: ['225px', '197px', null, null, 'auto', 'auto'],
                            display: 'none',
                            symbolName: 'sym-page5-popup',
                            id: 'sym-page5-popup',
                            type: 'rect'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/page5.mp3'],
                            id: 'page5',
                            rect: ['266', '196', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1024px', '768px']
                        }
                    }
                },
                timeline: {
                    duration: 34000,
                    autoPlay: true,
                    labels: {
                        "page5-playpoint": 250
                    },
                    data: [
                        [
                            "eid322",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Text16}",
                            'block',
                            'none'
                        ],
                        [
                            "eid335",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${Text16}",
                            'none',
                            'block'
                        ],
                        [
                            "eid340",
                            "opacity",
                            3000,
                            500,
                            "linear",
                            "${sym-page5-button}",
                            '0',
                            '1'
                        ],
                        [
                            "eid320",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${page5-line}",
                            'block',
                            'none'
                        ],
                        [
                            "eid329",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${page5-line}",
                            'none',
                            'block'
                        ],
                        [
                            "eid313",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sym-page5-popup}",
                            'none',
                            'none'
                        ],
                        [
                            "eid317",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${sym-page5-popup}",
                            'none',
                            'none'
                        ],
                        [
                            "eid321",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${page5-chart}",
                            'none',
                            'block'
                        ],
                        [
                            "eid328",
                            "scaleY",
                            1000,
                            500,
                            "linear",
                            "${page5-chart}",
                            '0',
                            '1'
                        ],
                        [
                            "eid337",
                            "opacity",
                            3000,
                            500,
                            "linear",
                            "${Text16}",
                            '0',
                            '1'
                        ],
                        [
                            "eid318",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${sym-page5-button}",
                            'block',
                            'none'
                        ],
                        [
                            "eid338",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${sym-page5-button}",
                            'none',
                            'block'
                        ],
                        [
                            "eid319",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${page5-desc}",
                            'block',
                            'none'
                        ],
                        [
                            "eid332",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${page5-desc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid334",
                            "opacity",
                            2500,
                            500,
                            "linear",
                            "${page5-desc}",
                            '0',
                            '1'
                        ],
                        [
                            "eid331",
                            "clip",
                            1500,
                            1000,
                            "linear",
                            "${page5-line}",
                            [0,0,201,0],
                            [0,485,201,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid327",
                            "scaleX",
                            1000,
                            500,
                            "linear",
                            "${page5-chart}",
                            '0',
                            '1'
                        ],
                            [ "eid341", "trigger", 2500, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${page5}', [] ] ]
                    ]
                }
            },
            "sym-4": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '48px', '48px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect4',
                            stroke: [1, 'rgb(0, 0, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(191,239,251,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '500', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text11',
                            text: '4',
                            align: 'left',
                            rect: ['15px', '7px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '48px', '48px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "sym-10": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '48px', '48px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect4',
                            stroke: [1, 'rgb(0, 0, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(191,239,251,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '500', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text11',
                            text: '10',
                            align: 'left',
                            rect: ['7px', '7px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '48px', '48px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "sym-7": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '48px', '48px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect4',
                            stroke: [1, 'rgb(0, 0, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(191,239,251,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '500', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text11',
                            text: '7',
                            align: 'left',
                            rect: ['15px', '7px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '48px', '48px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "sym-page4-button": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '89px', '29px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(16,2,247,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(2, 152, 202)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text6',
                            text: '研究设计',
                            align: 'left',
                            rect: ['9px', '4px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '89px', '29px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "sym-page4": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'page3-bg2',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/page3-bg.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'left-kid',
                            rect: ['161px', '402px', '105px', '290px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/left-kid.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'right-kid2',
                            rect: ['783px', '65px', '137px', '375px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/right-kid.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            transform: [[], [], [], ['0', '0']],
                            display: 'block',
                            rect: ['198px', '180px', '628px', '409px', 'auto', 'auto'],
                            id: 'page4-chart',
                            fill: ['rgba(0,0,0,0)', 'images/page4-chart.png', '0px', '0px']
                        },
                        {
                            rect: ['357px', '282px', '101px', '246px', 'auto', 'auto'],
                            type: 'image',
                            id: 'page4-chart-block1',
                            display: 'block',
                            clip: 'rect(246px 101px 246px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/page4-chart-block1.png', '0px', '0px']
                        },
                        {
                            rect: ['623px', '282px', '101px', '246px', 'auto', 'auto'],
                            type: 'image',
                            id: 'page4-chart-block2',
                            display: 'block',
                            clip: 'rect(246px 101px 246px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/page4-chart-block2.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text15',
                            text: '4. Garcia ML, et al. Montelukast, Compared with Fluticasone, for the Treatment of Persistent Asthma among 6-to 14-Year-Old Patients with Mild Asthma: The MOSAIC Study. Pediatrics. 2005;116:360-369.',
                            rect: ['198px', '635px', '628px', '38px', 'auto', 'auto'],
                            display: 'block',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(0,0,0,1.00)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', ''],
                            opacity: '0'
                        },
                        {
                            rect: ['737px', '599px', null, null, 'auto', 'auto'],
                            type: 'rect',
                            opacity: '0',
                            display: 'block',
                            symbolName: 'sym-page4-button',
                            cursor: 'pointer',
                            id: 'sym-page4-button'
                        },
                        {
                            rect: ['225px', '273px', null, null, 'auto', 'auto'],
                            id: 'sym-page4-popup',
                            symbolName: 'sym-page4-popup',
                            type: 'rect',
                            display: 'none'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/page4.mp3'],
                            id: 'page4',
                            rect: ['373', '169', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1024px', '768px']
                        }
                    }
                },
                timeline: {
                    duration: 30000,
                    autoPlay: false,
                    labels: {
                        "play-point": 250
                    },
                    data: [
                        [
                            "eid281",
                            "display",
                            0,
                            0,
                            "linear",
                            "${page4-chart}",
                            'block',
                            'none'
                        ],
                        [
                            "eid287",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${page4-chart}",
                            'none',
                            'block'
                        ],
                        [
                            "eid284",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text15}",
                            'block',
                            'none'
                        ],
                        [
                            "eid305",
                            "display",
                            4750,
                            0,
                            "linear",
                            "${Text15}",
                            'none',
                            'block'
                        ],
                        [
                            "eid309",
                            "opacity",
                            4750,
                            500,
                            "linear",
                            "${sym-page4-button}",
                            '0',
                            '1'
                        ],
                        [
                            "eid304",
                            "clip",
                            3750,
                            1000,
                            "linear",
                            "${page4-chart-block2}",
                            [246,101,246,0],
                            [0,101,246,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid293",
                            "scaleY",
                            3250,
                            500,
                            "linear",
                            "${page4-chart}",
                            '0',
                            '1'
                        ],
                        [
                            "eid286",
                            "display",
                            0,
                            0,
                            "linear",
                            "${page4-chart-block1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid294",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${page4-chart-block1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid307",
                            "opacity",
                            4750,
                            500,
                            "linear",
                            "${Text15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid279",
                            "top",
                            250,
                            3000,
                            "linear",
                            "${left-kid}",
                            '402px',
                            '122px'
                        ],
                        [
                            "eid297",
                            "clip",
                            3750,
                            1000,
                            "linear",
                            "${page4-chart-block1}",
                            [246,101,246,0],
                            [0,101,246,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid292",
                            "scaleX",
                            3250,
                            500,
                            "linear",
                            "${page4-chart}",
                            '0',
                            '1'
                        ],
                        [
                            "eid280",
                            "top",
                            250,
                            3000,
                            "linear",
                            "${right-kid2}",
                            '335px',
                            '65px'
                        ],
                        [
                            "eid282",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sym-page4-popup}",
                            'none',
                            'none'
                        ],
                        [
                            "eid285",
                            "display",
                            0,
                            0,
                            "linear",
                            "${page4-chart-block2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid298",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${page4-chart-block2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid283",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sym-page4-button}",
                            'block',
                            'none'
                        ],
                        [
                            "eid308",
                            "display",
                            4750,
                            0,
                            "linear",
                            "${sym-page4-button}",
                            'none',
                            'block'
                        ],
                            [ "eid310", "trigger", 3750, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${page4}', [] ] ]
                    ]
                }
            },
            "sym-page6": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'page3-bg',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/page3-bg.png', '0px', '0px']
                        },
                        {
                            id: 'right-kid',
                            type: 'image',
                            rect: ['783px', '65px', '137px', '375px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/right-kid.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            rect: ['199', '478px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            text: '6. Williams B, et al. Cl in Exp Allergy. 2001;31(6):845-854.<br>7. Knorr B, et al; Pediatric Montelukast Study Group. JAMA. 1998;279(15):1181-1186.',
                            id: 'Text',
                            opacity: '0',
                            display: 'block',
                            type: 'text'
                        },
                        {
                            id: 'left-kid',
                            type: 'image',
                            rect: ['161px', '122px', '105px', '290px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/left-kid.png', '0px', '0px']
                        },
                        {
                            rect: ['199px', '113px', '626px', '347px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'page6-chart',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/page6-chart.png', '0px', '0px']
                        },
                        {
                            rect: ['263px', '323px', '153px', '61px', 'auto', 'auto'],
                            type: 'image',
                            id: 'page6-chart-line1',
                            display: 'block',
                            clip: 'rect(0px 0px 61px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/page6-chart-line1.png', '0px', '0px']
                        },
                        {
                            rect: ['439px', '227px', '360px', '107px', 'auto', 'auto'],
                            type: 'image',
                            id: 'page6-chart-line22',
                            display: 'block',
                            clip: 'rect(0px 0px 107px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/page6-chart-line2.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            opacity: '0',
                            rect: ['736px', '477px', null, null, 'auto', 'auto'],
                            display: 'block',
                            symbolName: 'sym-page6-button',
                            cursor: 'pointer',
                            id: 'sym-page6-button'
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'sym-page6-popup',
                            rect: ['225px', '192px', null, null, 'auto', 'auto'],
                            id: 'sym-page6-popup'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/page6.mp3'],
                            id: 'page6',
                            rect: ['214', '174', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1024px', '768px']
                        }
                    }
                },
                timeline: {
                    duration: 18281,
                    autoPlay: true,
                    labels: {
                        "page6-playpoint": 500
                    },
                    data: [
                        [
                            "eid347",
                            "display",
                            500,
                            0,
                            "linear",
                            "${sym-page6-button}",
                            'block',
                            'none'
                        ],
                        [
                            "eid365",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${sym-page6-button}",
                            'none',
                            'block'
                        ],
                        [
                            "eid344",
                            "display",
                            500,
                            0,
                            "linear",
                            "${sym-page6-popup}",
                            'none',
                            'none'
                        ],
                        [
                            "eid361",
                            "clip",
                            2000,
                            500,
                            "linear",
                            "${page6-chart-line1}",
                            [0,0,61,0],
                            [0,153,61,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid348",
                            "display",
                            500,
                            0,
                            "linear",
                            "${page6-chart-line22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid362",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${page6-chart-line22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid350",
                            "display",
                            500,
                            0,
                            "linear",
                            "${page6-chart}",
                            'block',
                            'none'
                        ],
                        [
                            "eid352",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${page6-chart}",
                            'none',
                            'block'
                        ],
                        [
                            "eid357",
                            "scaleX",
                            1500,
                            500,
                            "linear",
                            "${page6-chart}",
                            '0',
                            '1'
                        ],
                        [
                            "eid351",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid368",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid364",
                            "clip",
                            2500,
                            1000,
                            "linear",
                            "${page6-chart-line22}",
                            [0,0,107,0],
                            [0,360,107,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid367",
                            "opacity",
                            3500,
                            500,
                            "linear",
                            "${sym-page6-button}",
                            '0',
                            '1'
                        ],
                        [
                            "eid349",
                            "display",
                            500,
                            0,
                            "linear",
                            "${page6-chart-line1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid359",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${page6-chart-line1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid358",
                            "scaleY",
                            1500,
                            500,
                            "linear",
                            "${page6-chart}",
                            '0',
                            '1'
                        ],
                        [
                            "eid370",
                            "opacity",
                            3500,
                            500,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                            [ "eid371", "trigger", 2000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${page6}', [] ] ]
                    ]
                }
            },
            "sym-logo": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Arial, Helvetica, sans-serif', [50, 'px'], 'rgba(2,152,202,1)', '900', 'none solid rgb(2, 152, 202)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text5',
                            text: '（孟鲁司特纳 . 默沙东）',
                            align: 'left',
                            rect: ['0px', '216px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [50, 'px'], 'rgba(2,152,202,1)', '900', 'none solid rgb(2, 152, 202)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text',
                            text: '每日一次',
                            align: 'left',
                            rect: ['22px', '0px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [120, 'px'], 'rgba(2,152,202,1)', '900', 'none solid rgb(2, 152, 202)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text2',
                            text: '顺尔宁',
                            align: 'left',
                            rect: ['22px', '71px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [50, 'px'], 'rgba(2,152,202,1)', '900', 'none solid rgb(2, 152, 202)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text4',
                            text: '®',
                            align: 'left',
                            rect: ['400px', '81px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '542px', '274px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "sym-3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '48px', '48px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect4',
                            stroke: [1, 'rgb(0, 0, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(191,239,251,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '500', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text11',
                            text: '3',
                            align: 'left',
                            rect: ['15px', '7px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '48px', '48px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "sym-page5-popup": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '20px', '563px', '285px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            fill: ['rgba(255,255,255,1.00)'],
                            id: 'RoundRect2',
                            stroke: [1, 'rgba(0,0,255,1.00)', 'solid'],
                            type: 'rect',
                            boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            rect: ['15px', '49px', '541px', '138px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1.00)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', ''],
                            id: 'Text7',
                            text: '一项为期52周的多中心、随机、对照的开放性研究，共纳入395例2-8岁的轻度持续性哮喘或反复性哮喘患儿，随机吸入布地奈德0.5mg qd（n=197）或口服孟鲁司特4mg或5mg qd（n=198）治疗52周。轻度哮喘急性发作时，患者每日加用1次布地奈德0.5mg雾化吸入治疗，持续14天，重度发作时，患者接受口服激素治疗，持续3-10天。主要疗效终点为52周内因哮喘急性发作而第一次加用其他哮喘药物的时间。次要终点包括12周和26周时第一次加用其他药物的时间，12周、26周和52周时第一次哮喘发作（轻度和重度）的时间，52周内哮喘发作，日记参数（如呼气峰流速PEF），或者报告的结果和医生、护士的评估。',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            type: 'rect',
                            id: 'sym-page2-popup-close',
                            symbolName: 'sym-page2-popup-close',
                            cursor: 'pointer',
                            rect: ['536', '0', '38', '38', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '574px', '187px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("children-part2_edgeActions.js");
})("EDGE-191161658");
