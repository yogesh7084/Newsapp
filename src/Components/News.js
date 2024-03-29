import React, { Component } from "react";

import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
export default class News extends Component {
  articles = [
    {
      source: { id: null, name: "The Indian Express" },
      author: "Express Web Desk",
      title:
        "Himachal Pradesh Assembly Election Result 2022 Live Updates: Early trends from HP show neck-and-neck race between BJP, Congress - The Indian Express",
      description:
        "Himachal Pradesh Assembly Election Result 2022 Live Updates today, December 8:  If the BJP returns to power, the saffron party would have managed to buck the three-decade old tradition of voting out the incumbent government in the state.",
      url: "https://indianexpress.com/elections/himachal-pradesh-assembly-election-results-today-live-updates-bjp-congress-aap-8311189/",
      urlToImage:
        "https://images.indianexpress.com/2022/12/Himachal-Election-Results-copy.jpg",
      publishedAt: "2022-12-08T04:34:40Z",
      content:
        "Barring one, all pollsters have given the BJP a slender edge in Himachal Pradesh which has a tradition of voting out the incumbent.\r\nA day before the announcement of Himachal Pradesh assembly electio… [+2448 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: "NDTV News Desk",
      title:
        "Gujarat Election Results 2022: BJP's Big Gains, AAP Makes Entry PM's Home State: Live Updates - NDTV",
      description:
        "The results for the Gujarat assembly elections will be declared today. The counting of votes is underway. The BJP has crossed the halfway mark while the Congress is leading in over 30 seats, shows the latest trends.",
      url: "https://www.ndtv.com/india-news/gujarat-election-results-2022-live-updates-counting-of-votes-begins-at-8-am-3586538",
      urlToImage:
        "https://c.ndtvimg.com/2022-12/rojsfr18_bjp-celebration-gujarat_625x300_08_December_22.jpg",
      publishedAt: "2022-12-08T04:19:09Z",
      content:
        "Gujarat Election Results: The BJP has been in power in Gujarat for the last six terms.\r\nThe results for the Gujarat assembly elections will be declared today. The counting of votes is underway. The B… [+4317 chars]",
    },
    {
      source: { id: null, name: "Abplive.com" },
      author: "ABP News Bureau",
      title:
        "UP Byelection Results 2022 Live: Dimple Yadav Leads On Mainpuri Lok Sabha Seat By 25,000 Votes - ABP Live",
      description:
        "UP By-election Results 2022 Live: The counting of votes in the by-election in Manipur Lok Sabha seat, Rampur & Khatauli seats begins. Follow live updates here.",
      url: "https://news.abplive.com/elections/up-by-election-results-2022-live-updates-khatauli-mainpuri-bypoll-rampur-bypolls-winners-dimple-yadav-raghuraj-singh-shakya-bjp-sp-1568073",
      urlToImage:
        "https://feeds.abplive.com/onecms/images/uploaded-images/2022/12/07/7cbdf47f934ca8532338a083576435f71670427823975375_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628",
      publishedAt: "2022-12-08T04:18:08Z",
      content:
        "UP By-election Results 2022 Live: Welcome to ABP Live as we bring to you detailed coverage of the high-voltage By-election Results 2022. By-elections in six assembly districts across five states and … [+2502 chars]",
    },
    {
      source: { id: null, name: "Thewire.in" },
      author: "Will Dunham",
      title:
        "Oldest DNA on Record Reveals Amazing Lost World in Greenland - The Wire Science",
      description:
        "Researchers said on Wednesday fragments of DNA were detected for a panoply of animals including mastodons, reindeer, hares, lemmings and geese as well as plants including poplar, birch and thuja trees and microorganisms including bacteria and fungi.",
      url: "https://science.thewire.in/the-sciences/ancient-dna-lost-world-greenland/",
      urlToImage:
        "https://cdn.thewire.in/wp-content/uploads/2022/12/07220419/2022-12-07T160420Z_2_LYNXMPEIB60T7_RTROPTP_4_SCIENCE-DNA.jpg",
      publishedAt: "2022-12-08T02:30:16Z",
      content:
        "An artist’s reconstruction shows the Kap Kobenhavn formation in northernmost Greenland two million years ago. Photo: Beth Zaiken/Handout via Reuters\r\n<ul><li>Scientists have identified DNA from anima… [+5607 chars]",
    },
    {
      source: { id: null, name: "Business Standard" },
      author: "ANI",
      title:
        "Microsoft adds free of charge communities feature to create groups on Teams - Business Standard",
      description:
        "American tech giant Microsoft has launched a new communities feature for Microsoft Teams which will help users explore the best parts of Teams free of charge to create and organize groups",
      url: "https://www.business-standard.com/article/technology/microsoft-adds-free-of-charge-communities-feature-to-create-groups-on-teams-122120800078_1.html",
      urlToImage:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2021-07/12/full/1626056584-8778.jpg",
      publishedAt: "2022-12-08T02:26:00Z",
      content:
        "American tech giant Microsoft has launched a new communities feature for Microsoft Teams, which will help users explore the best parts of Teams free of charge to create and organize groups.\r\nAccordin… [+1227 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "HT Tech",
      title:
        "Garena Free Fire Redeem codes for December 8: Pick up the Snow Doom Katana - HT Tech",
      description:
        "Garena Free Fire Redeem codes for December 8: Check out step by step guide to unlock today’s bunch of rewards.",
      url: "https://tech.hindustantimes.com/how-to/garena-free-fire-redeem-codes-for-december-8-pick-up-the-snow-doom-katana-71670465452182.html",
      urlToImage:
        "https://images.hindustantimes.com/tech/img/2022/12/08/1600x900/e550be0c037dcef6cedbfd875a46491ajpg_1_1670465519431_1670465519618_1670465519618.jpg",
      publishedAt: "2022-12-08T02:22:56Z",
      content:
        "Garena Free Fire Redeem codes for December 8: The Garena Free Fire redeem codes for today have already already released bringing in new and exciting bunch of rewards like diamond hack, royale voucher… [+2553 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "HT Sports Desk",
      title:
        "‘Haven't won anything but meaningless series': Ex-cricketers blast Team India - Hindustan Times",
      description:
        "Former players Venkatesh Prasad, Virender Sehwag called for changes in Team India's approach after their defeat to Bangladesh in the 2nd ODI which resulted in their successive ODI series defeats in Bangladesh. | Cricket",
      url: "https://www.hindustantimes.com/cricket/india-haven-t-won-anything-but-inconsequential-bilaterals-sehwag-prasad-blast-rohit-and-co-after-series-loss-vs-bangladesh-101670431888994.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/12/07/1600x900/Bangladesh-India-Cricket-60_1670432010396_1670432010396_1670432034947_1670432034947.jpg",
      publishedAt: "2022-12-08T02:15:21Z",
      content:
        "India crashed to another disappointing defeat in the second ODI vs Bangladesh, losing by five runs at the Sher-e-Bangla in Dhaka. The defeat meant that Bangladesh sealed the three-match ODI series an… [+2544 chars]",
    },
    {
      source: { id: null, name: "Moneycontrol" },
      author: "Rakesh Patil",
      title:
        "Stock Market Today: Top 10 things to know before the market opens today - Moneycontrol",
      description:
        "Stock Market News: Trends in the SGX Nifty indicate a flat opening for the broader index in India with a loss of 18 points.",
      url: "https://www.moneycontrol.com/news/business/markets/stock-market-today-top-10-things-to-know-before-the-market-opens-today-126-9667711.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2022/07/SensexBSENSE-770x433.jpg",
      publishedAt: "2022-12-08T02:10:18Z",
      content:
        "The market is likely to open flat as trends in the SGX Nifty indicate a muted opening for the broader index in India with a loss of 18 points.\r\nOn Wednesday, the BSE Sensex fell 216 points to 62,411,… [+4339 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "HT Entertainment Desk",
      title:
        "Aamir Khan in full grey look, grown-up Harshaali attend Salaam Venky screening - Hindustan Times",
      description:
        "All from Aamir Khan, Yuvraj Singh, Harshaali Malhotra to Tanishaa Mukerji attended the screening of Kajol's film Salaam Venky on Wednesday. | Bollywood",
      url: "https://www.hindustantimes.com/entertainment/bollywood/aamir-khan-yuvraj-singh-harshaali-malhotra-attend-salaam-venky-screening-101670462714285.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/12/08/1600x900/salaam_venky_screening_1670464745041_1670464745339_1670464745339.jpg",
      publishedAt: "2022-12-08T02:07:07Z",
      content:
        "A special screening of Kajol's upcoming film Salaam Venky was held in Mumbai on Wednesday. It was a starry affair with some unexpected faces in attendance. Kajol's Fanaa co-star Aamir Khan, cricketer… [+2010 chars]",
    },
    {
      source: { id: "engadget", name: "Engadget" },
      author: "https://www.engadget.com/about/editors/igor-bonifacic",
      title: "Dyson’s Zone air-purifying headphones start at $949 - Engadget",
      description:
        "Dyson's unique Zone noise-canceling headphones will start at $949 when they arrive in the US next year..",
      url: "https://www.engadget.com/dyson-zone-noise-canceling-headphones-pricing-availability-announced-000119196.html",
      urlToImage:
        "https://s.yimg.com/os/creatr-uploaded-images/2022-12/17ae5110-7673-11ed-9bfa-7a741f87933d",
      publishedAt: "2022-12-08T00:01:59Z",
      content:
        "When Dyson announced its Zone noise-canceling and air-purifying headphones\r\n earlier this year, the company kept some details close to its chest. Specifically, Dyson didnt announce pricing or availab… [+2303 chars]",
    },
    {
      source: { id: null, name: "The Indian Express" },
      author: "Sandip G",
      title:
        "Behind Morocco's dream run at FIFA World Cup, is a secret weapon in the stands — players' families - The Indian Express",
      description:
        "The families have bonded so much over the past three weeks that they are now like a big family itself.",
      url: "https://indianexpress.com/article/sports/football/behind-moroccos-dream-run-at-fifa-world-cup-is-a-secret-weapon-in-the-stands-players-families-8312061/",
      urlToImage:
        "https://images.indianexpress.com/2022/12/Fans-celebrate-with-Moroccan-players-after-the-team-qualified-for-the-quarter-finals.-Reuters.jpg",
      publishedAt: "2022-12-07T22:46:34Z",
      content:
        "THERE’S THIS heartwarming viral clip from the World Cup. It has Morocco’s star-player Achraf Hakimi, after the win over Spain, tearing away to the enclosure where his mother is seated. He climbs over… [+4927 chars]",
    },
    {
      source: { id: null, name: "The Indian Express" },
      author: "Express News Service",
      title:
        "A binary merger just outside our Milky Way links long GRB with kilonovae - The Indian Express",
      description:
        "Significantly, India'a largest optical telescope -- the 3.6 metres Devasthal Optical Telescope (DOT) — operated by Aryabhatta Research Institute of Observational Sciences (ARIES), Nainital, was among the key global telescopes that together confirmed this rare…",
      url: "https://indianexpress.com/article/technology/science/a-binary-merger-just-outside-our-milky-way-links-long-grb-with-kilonovae-8312136/",
      urlToImage:
        "https://images.indianexpress.com/2022/12/milky-way-75911.jpg",
      publishedAt: "2022-12-07T21:59:08Z",
      content:
        "In a first-of-its-kind detection, a team of astronomers has recorded a rare astronomical event involving a compact binary merger emitting long Gamma Ray Burst (GRB) twinned with a kilonova emissions … [+1990 chars]",
    },
    {
      source: { id: null, name: "India Today" },
      author: "Arunesh Kumar Sharma",
      title:
        "Aries Horoscope Today, December 8, 2022: Business will be on the upswing! - India Today",
      description:
        "Aries Daily Horoscope for December 8: The percentage of success in business will be better than expected. Check the full predictions here.",
      url: "https://www.indiatoday.in/horoscopes/aries/story/aries-horoscope-today-daily-for-8-december-2022-business-will-be-on-the-upswing-2306522-2022-12-08",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202212/aries_3-sixteen_nine.jpg?VersionId=CQB8EM1NbGbi.RspXGQjSIfFPKJ74K84",
      publishedAt: "2022-12-07T18:39:36Z",
      content:
        "By Arunesh Kumar Sharma: What will your day look like in terms of health, romance, finance, and fortune? Read everything here.\r\nMonetary gains: The percentage of success in business will be better th… [+1078 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "HT Correspondent",
      title:
        "As storm nears, Tamil Nadu ready with 5,000 camps, 400 rescue staff - Hindustan Times",
      description:
        "Tamil Nadu’s department of revenue and disaster management has readied more than 5000 relief camps across the state to relocate people from low-lying areas | Latest News India",
      url: "https://www.hindustantimes.com/india-news/as-storm-nears-tamil-nadu-ready-with-5-000-camps-400-rescue-staff-101670438332406.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/12/07/1600x900/7bbaaadc-7650-11ed-b42b-38ab6db0ade0_1670438323173.jpg",
      publishedAt: "2022-12-07T18:38:51Z",
      content:
        "Tamil Nadu is on a pre-cyclone watch as a depression strengthened into a deep depression on Wednesday morning which lay centred at 8.30am about 770 km east-southeast of Chennai, weathermen said. This… [+2817 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "HT Correspondents",
      title:
        "‘Disregard of people’s mandate’: Dhankhar on NJAC Act’s repeal - Hindustan Times",
      description:
        "He offered NJAC as an example of how the ability of the executive, judiciary and legislature, need to work within their domains is critical to democracy. | Latest News India",
      url: "https://www.hindustantimes.com/cities/delhi-news/disregard-of-people-s-mandate-dhankhar-on-njac-act-s-repeal-101670437000292.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/12/07/1600x900/0b910b06-765b-11ed-8ebf-dd5cdea533c0_1670436999046.jpg",
      publishedAt: "2022-12-07T18:16:39Z",
      content:
        "Vice President Jagdeep Dhankhar commented on the system of selecting judges for constitutional courts, in the course of his opening address after assuming the office of Rajya Sabha Chairperson on Wed… [+3639 chars]",
    },
    {
      source: { id: null, name: "News18" },
      author: "Pallavi Ghosh",
      title:
        "With Single-digit Score in MCD Polls, Clueless Congress Needs Full Overhaul to Recapture Delhi's Dil - News18",
      description:
        "The party won only 9 wards with 188 of its candidates losing their deposits. This in Delhi which the Congress ruled for 15 years",
      url: "https://www.news18.com/news/elections/with-single-digit-score-in-mcd-polls-clueless-congress-needs-full-overhaul-to-recapture-delhis-dil-6565819.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2022/07/untitled-design-2022-07-10t182149.865-166612173516x9.jpg",
      publishedAt: "2022-12-07T17:32:40Z",
      content:
        'Congress has become like the hair loss problem. You lose hair slowly over time, till one day you realise you have gone bald. It doesnt happen overnight." This is what a Congress leader told News18, c… [+3351 chars]',
    },
    {
      source: { id: null, name: "NDTV News" },
      author: "Agence France-Presse",
      title:
        "Covid-19 The Reason Behind Switzerlands 6-1 Defeat To Portugal In FIFA World Cup? Team Chiefs Answer.. - NDTV Sports",
      description:
        'Sports director Pierluigi Tami told a press conference on Wednesday: "It was not a question of Covid. It was a virus that spread in the hotel. Not all, but some players caught it.',
      url: "https://sports.ndtv.com/fifa-world-cup-2022/covid-19-the-reason-behind-switzerlands-6-1-defeat-to-portugal-in-fifa-world-cup-team-chiefs-answer-3587060",
      urlToImage:
        "https://c.ndtvimg.com/2022-12/k4o4cre_switzerland-vs-portugal_625x300_07_December_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
      publishedAt: "2022-12-07T17:21:45Z",
      content:
        "Switzerland team chiefs denied Wednesday that several sick players were suffering from the coronavirus as they sought to explain their World Cup humbling by Portugal. At least three players were affe… [+1262 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title:
        "Pics From Salman's Mom Salma Khan's 80th Birthday Celebrations. Courtesy: Harshdeep Kaur - NDTV Movies",
      description:
        '"Meeting Helen ji and making her dance on her legendary songs was the cherry on the cake," wrote Harshdeep Kaur',
      url: "https://www.ndtv.com/entertainment/pics-from-salmans-mom-salma-khans-80th-birthday-celebrations-courtesy-harshdeep-kaur-3586901",
      urlToImage:
        "https://c.ndtvimg.com/2022-12/uk8fuipo_salma_625x300_07_December_22.jpg",
      publishedAt: "2022-12-07T16:37:32Z",
      content:
        "Harshdeep Kaur shared this picture. (courtesy: harshdeepkaurmusic)\r\nNew Delhi: Singer Harshdeep Kaur, on Wednesday, shared many pictures from Salman Khan's mother Salma Khan's 80th birthday celebrati… [+1476 chars]",
    },
    {
      source: { id: null, name: "Koimoi" },
      author: "Oshine Koul",
      title:
        "Drishyam 2 Box Office Day 20 (Early Trends): Ajay Devgn Set To Break The 200 Crore Barrier Once Again After Tanhaji! - Koimoi",
      description:
        "Drishyam 2 Box Office Day 20 (Early Trends): Drum roll! Ajay Devgn starrer is all set to enter the 200 crore club! Read on",
      url: "https://www.koimoi.com/?p=943243",
      urlToImage:
        "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/12/drishyam-2-box-office-day-20-early-trends-ajay-devgn-to-enter-200-crore-club-01.jpg",
      publishedAt: "2022-12-07T16:29:42Z",
      content:
        "Drishyam 2 Box Office Day 20 (Early Trends): Ajay Devgn Set To Break The 200 Crore Barrier ( Photo Credit Movie Poster’s )\r\nDrishyam 2 Box Office Day 20 (Early Trends): Ajay Devgn is on roll and how!… [+2120 chars]",
    },
    {
      source: { id: null, name: "Mid-day" },
      author: null,
      title:
        "Alpilean Reviews [Complaints Exposed] Where To Buy, Benefits, Pros, Cons And Ingredients! - mid-day.com",
      description:
        "Alpilean Reviews  Is It Legit and Worth Buying Real Results Alpilean is an effective weight loss supplement that contains six main herbs which are believed to help improve and reduce low body temperature.",
      url: "https://www.mid-day.com/brand-media/article/alpilean-reviews-complaints-exposed-where-to-buy-benefits-pros-cons-and-ingredients-23259475",
      urlToImage: "https://images.mid-day.com/images/images/2022/dec/4_d.jpg",
      publishedAt: "2022-12-07T14:51:00Z",
      content:
        "Alpilean Reviews Is It Legit and Worth Buying Real Results Alpilean is an effective weight loss supplement that contains six main herbs which are believed to help improve and reduce low body temperat… [+10360 chars]",
    },
  ];

  static defaultProps ={
    country: 'in',
    pagesize: 6,
    category: 'general'
  }
  static propTypes ={
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
  }
  constructor() {
    super();
    // console.log("I am constructor");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1
    }
  }
  async componentDidMount() {
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props
  .category}&apiKey=318d40f811b445e79d07145af5d9e079&pagesize=${this.props.pagesize}`
    this.setState({loading:true})
    let data = await fetch(apiUrl);
    let parsedData = await data.json()
    //console.log(parsedData);
    this.setState({ articles: parsedData.articles, 
      totalResults: parsedData.totalResults,
      loading: false
    })
  }
  handlePrevClick = async () => {
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props
  .category}&apiKey=318d40f811b445e79d07145af5d9e079&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`;
    this.setState({loading:true})
    let data = await fetch(apiUrl);
    let parsedData = await data.json()

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })

  }
  handleNextClick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pagesize))) {

      let apiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props
    .category}&apiKey=318d40f811b445e79d07145af5d9e079&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
      this.setState({loading:true})
      let data = await fetch(apiUrl);
      let parsedData = await data.json()
      
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      })
    }

  }

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{ marginBottom: '20px' }}> Top-Headlines </h2>
        {this.state.loading && <Spinner/>}

        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title.slice(0, 70) + "..." : element.title}
                description={element.description ? element.title.slice(0, 100) + "..." : element.title}
                imageUrl={element.urlToImage ? element.urlToImage : "https://media.istockphoto.com/id/1206575314/vector/image-unavailable-icon.jpg?s=612x612&w=0&k=20&c=7aypXCTzJ42V0xRHJ08Nq1K6fPgY5IB_D4fXbWloX_w="}
                newsUrl={element.url}
              />
            </div>
          })}
        </div>
        <div className="container-2 d-flex justify-content-between">zzz
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pagesize)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}
