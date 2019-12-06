//this Javascript was gathered from a template on Github: https://blog.mapbox.com/create-location-based-stories-with-minimal-code-fc8c5da60d96
var config = {
    style: 'mapbox://styles/hararick/ck37lspme7ken1cmmdmqhhxya',
    accessToken: 'pk.eyJ1IjoiaGFyYXJpY2siLCJhIjoiY2syeGNlaDMyMG92cDNtbzI4cjJpOXR1eiJ9.bqTXBH9KoSB9NSluFiI3oA',
    showMarkers: true,
    theme: 'dark',
    alignment: 'left',
    title: 'The Education Crisis in Syria',
    subtitle: "In a war-torn country, the safest thing to do is hide.",
    byline: 'A Scolling Story by Hannah Rarick',
    footer: 'This page was created by Hannah Rarick for the Intro to Web Apps for Communicators course at the University of Florida. Click here for the <a href="https://github.com/hannahrarick/syria-project" target="_blank">Github link</a>',
    chapters: [
        {
            id: 'Syria',
            title: 'An Overview',
            image: 'images/flag.png',
            caption: '<p class="caption"><a href="https://commons.wikimedia.org/wiki/File:Flag_of_Syria.svg" target="_blank">Flag Photo Source</a></p>',
            description: '<p>Syria is comprised of about 17 million civilians separated into 14 governorates, an administrative division in the country. Four of those governorates are further described here for its war zone territories and how that has affected the education system. The war through Syria has not been able to stay within military boundaries and instead have continuously destroyed homes, marketplaces and schools. In reason to this, education in Syria has been placed to the backburner for many families because of the fear their children will be abducted into the military regime or killed. With the high number of bombings on schools specifically, it is safer to stay inside and as far away. </p> <p>The Syrian Network for Human Rights (SNHR) reported in 2018 that <u>2.8 million children</u> are out of school.</p> <p>In 2019, United Nations called for serious aid toward Syria as conditions continue to deteriorate.</p> <p>Other than the population count which is up to date, due to the present dangerous climate in Syria, information below is gathered from a combination of the years 2017, 2018 and 2019.</p> <p>Source: <a href="http://muep.mau.se/handle/2043/28982" target="_blanket">Case Study for Syria</a>, <a href="https://news.un.org/en/story/2019/03/1033882" target="_blank">UN Syrians bruatlity</a>, <a href="https://news.un.org/en/story/2019/11/1050961" target="_blank">UN: Syrian ongoing violence</a></p>',
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
            caption: '<p class="caption"><a href= "https://commons.wikimedia.org/wiki/File:Ghouta_Arbin_27-2-2018_(1).jpg" target="_blank">Photo taken in 2018 after a bombing. From Qasioun News Agency</a></p>',
            description: '<h3>Population: 426,000 </h3> <p>Despite the “de-escalation” efforts, October and November were violent months for Ghouta, Syria, in 2017. At least six children died when shells fired at a school in Jisreen town located in Eastern Ghouta. According to Human Rights Watch, only a half an hour later on that same day another school was bombed killing two children. Countless of air strikes and bombings struck the civilian infrastructure including schools.</p> <p>Educational facilities were closed the entire month of November in 2017 in response to the danger of schools getting destroyed by bombs as well as teachers and students getting killed. In order to continue their education, some teachers moved classes into basements of residential buildings, however due to the deteriorating conditions, there’s a limited access to school supplies. </p> <p> Source: <a href="https://www.acaps.org/sites/acaps/files/products/files/20171115_acaps_briefin_note_syria_eastern_ghouta.pdf" target="_blank"> Conflict in Eastern Ghouta</a></p>',
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
            id: 'Idlib',
            title: 'Idlib, Syria',
            image: 'images/idlib.png',
            caption: '<p class="caption"><a href="https://commons.wikimedia.org/wiki/File:Idlib_Martyrs%27_Brigade.png" target="_blank"> Photo of Idlib in 2012</a></p>',
            description: '<h3>Population: 128,840 </h3> <p>Due to the rapidly growing hostile environment in Idlib, Syria, reporters and Syrian activist organizations are stating there’s a threat of an ‘Illiterate generation’ among Syrian children. Schools are reported to be on the front lines of airstrikes, according to Syria Relief, a UK based organization focused on Syrian issues. The rising threat of illiteracy derives from the 40 percent of schools being destroyed across Syria.</p> <p>In Idlib, four of the 55 schools have been targeted by airstrikes, said Syria Relief. Furthermore, as of 2019, the Idlib governorate, next to Aleppo, has the second largest death toll in Syria. Additionally, Syria Relief believes political settlement will become impossible as “targeting schools will only embitter the population to the forces who continue to flout international law through the destruction of schools.” A few non-governmental organizations are focusing their efforts on sending children resources, however, the need is too great.</p> <p>Source: <a href="https://reliefweb.int/report/syrian-arab-republic/no-school-go-back-impact-airstrikes-syrias-schools" target="_blank">Syria Relief Report</a>, <a href="http://worldpopulationreview.com/countries/syria-population/cities/" target="_blank">Population</a></p>',
            location: {
                center: [36.63393, 35.93062],
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
            image: 'images/arraqqah.png',
            caption: '<p class="caption"><a href="https://commons.wikimedia.org/wiki/File:In_a_place_now_called_ISIS_(21382843313).jpg" target="_blank"> Photo of a family leaving Ar-Raqqah</a></p>',
            description: '<h3>Population: 513,000 </h3> <p>In 2017, the Raqqa governorate was ISIS’s, a terrorist militant group, capital. The Syrian Democratic Forces and Free Syrian Army militias with the assistance of the US pushed back to rid IS from full power. During this time, NGO sources showed that there were daily attacks on schools accumulating to “at least 150 incidents that year.” Research by Human Rights Watch, an air strike destroyed a three-story Badia Boarding School in Mansoura, Raqqa, killing 40 civilians sheltered there, including 16 children. Now, with Raqqa freed from ISIS control, it doesn’t mean an end to the violence and destruction. Reported in the beginning of 2019 by the Syrian Network for Human Rights, thousands of dead bodies needed to still be identified.</p> <p>Source: <a href="https://www.refworld.org/docid/5be94301c.html" target="_blank"> Ref World: Education Under Attack in Syria 2018</a>, <a href="https://www.macrotrends.net/cities/22607/al-raqqa/population" target="_blank">Population</a>, <a href="http://sn4hr.org/blog/2019/03/28/53487/" target="_blank">SNHR: Identification of Bodies</a></p>',
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
            image: 'images/aleppo.png',
            caption: '<p class="caption"><a href="https://commons.wikimedia.org/wiki/File:Aleppo_2017_(17).jpg" target="_blank">Photo of Aleppo in 2017.</a></p>',
            description: '<h3>Population: 1.6 million </h3> <p>The largest governorate in Syria has been affected heavily during the war. According to information provided by the UN, an air strike reportedly hit the Abu Bakr Seddeeq School in Aleppo in 2017 killing seven children and injuring ten others. Although the secondary schools have been attacked the most, shells partially damaged Aleppo’s University Faculty of Law building in the same year. Following in 2019, Aleppo held the largest death toll of victims by Russian forces and had 201 attacks on schools. Syria Relief is trying to partner with host countries to provide educational materials and hopefully send them to schools in those safe cities.</p> <p>Source: <a href="https://www.refworld.org/docid/5be94301c.html" target="_blank">Ref World: Education Under Attack in Syria 2018</a>, <a href="http://worldpopulationreview.com/countries/syria-population/cities/" target="_blank">Population</a></p>',
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
            id: 'help',
            showMarkers: false,
            title: 'What can you do to help?',
            image: 'images/children.png',
            caption: '<p class="caption"><a href="https://commons.wikimedia.org/wiki/File:Dancing_and_singing_to_forget_the_pain_of_Syrias_conflict_(11235994366).jpg" target="_blank"> Photo of Children in Syria </a><p>',
            description: '<p>The crisis in Syria consists of culminating political, social and cultural factors. Due to the violent and constantly dangerous conditions, kids are being forced to stay in hiding or are abducted into military regimes instead of receiving the proper education they deserve.</p> <p>Non-governmental organizations like the Syrian Network for Human Rights (SNHR) and Syria Relief are trying to spread the word of the heavy decline in children attending school because of the insufferable environment and are finding ways to help.</p> <p>Here’s how you can.</p> <p>Being aware of the issue is a small piece of the battle. People aren’t acting because they simply do not know. But contributing to non-governmental organizations who need the additional resources could give Syrian children school supplies that were destroyed in their educational facility.</p> <h3>You can find the Syrian Network for Human Rights and Syria Relief website here: <a href="http://sn4hr.org/" target="_blank">SNHR</a>, <a href="https://www.syriarelief.org.uk/" target="_blank">Syria Relief</a></h3>',

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
