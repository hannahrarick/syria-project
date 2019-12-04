var config = {
    style: 'mapbox://styles/hararick/ck37lspme7ken1cmmdmqhhxya',
    accessToken: 'pk.eyJ1IjoiaGFyYXJpY2siLCJhIjoiY2syeGNlaDMyMG92cDNtbzI4cjJpOXR1eiJ9.bqTXBH9KoSB9NSluFiI3oA',
    showMarkers: true,
    theme: 'dark',
    alignment: 'left',
    title: 'Syrian Education',
    subtitle: "In a war-torn country, the safest thing to do is hide.",
    byline: 'By Hannah Rarick',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'Syria',
            title: 'An Overview',
            image: 'images/flag.png',
            caption: '<p class="caption"><a href="https://commons.wikimedia.org/wiki/File:Flag_of_Syria.svg" target="_blank">Flag Photo Source</a></p>',
            description: "<p>Syria is comprised of 14 governorates, an administrative division in the country. Four of those governorates are further described here for its war zone territories and how that has affected the education system. The war through Syria has not been able to stay within military boundaries and instead have continuously destroyed homes, marketplaces and schools. In reason to this, education in Syria has been placed to the backburner for many families because of the fear their children will be abducted into the military regime or killed. With the high number of bombings on schools specifically, it's safer to stay inside and as far away. </p> <p>The Syrian Network for Human Rights (SNHR) reported in 2018 that <u>2.8 million Syrian children</u> are out of school.</p> <p>In 2019, United Nations called for serious aid toward Syria as conditions continue to deteriorate.</p> <p>Due to the present dangerous climate in Syria, information below is gathered from a combination of the years 2017, 2018 and 2019.</p>",
            location: {
                center: [38.137140, 34.593078],
                zoom: 7.85,
                pitch: 40,
                bearing: 0
            },
            onChapterEnter: [ {
              opacity: 3
            }
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Ghouta',
            title: 'Ghouta, Syria',
            image: 'images/ghouta.png',
            caption: '<p class="caption"><a href= "https://commons.wikimedia.org/wiki/File:Ghouta_Arbin_27-2-2018_(1).jpg">Photo taken in 2018 after a bombing. From Qasioun News Agency</a></p>',
            description: '<p>Population: 426,000</p> <p>In 2017, Eastern Ghouta consisted of 22 besieged communities. Despite the “de-escalation” efforts, October and November were violent months for Ghouta. Countless of air strikes and bombings struck the civilian infrastructure including schools. Educational facilities were closed the entire month of November in 2017 in response to the danger of schools getting destroyed by bombs as well as teachers and students getting killed.</p>',
            location: {
                center: [36.41916499, 33.499998],
                zoom: 13,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [{
              opacity: 3
            }

            ],
            onChapterExit: []
        },
        {
            id: 'Daraa',
            title: 'Daraa, Syria',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [36.103666252, 32.621830846],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Ar-Raqqah',
            title: 'Ar-Raqqah, Syria',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [39.00788, 35.95283],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Aleppo',
            title: 'Aleppo, Syria',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [37.166666, 36.2166658],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'References',
            showMarkers: false,
            title: 'References',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [38.9968, 34.8021],
                zoom: 3.9,
                pitch: 10,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
