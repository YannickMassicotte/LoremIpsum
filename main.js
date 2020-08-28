// Array of objects to simulate database
const text = [
{
    id: 1,
    type: "Hipster",
    text: "I'm baby pinterest yuccie butcher, vegan meditation 90's kitsch wayfarers vice air plant lyft chillwave chicharrones retro banjo. Disrupt gochujang PBR&B leggings blog adaptogen biodiesel sriracha mixtape shabby chic +1 synth la croix. Kickstarter plaid shabby chic, four dollar toast 8-bit iceland bicycle rights pour-over kitsch skateboard shaman. Raw denim skateboard subway tile schlitz viral pop-up humblebrag food truck jianbing organic bitters forage mustache godard retro. Mustache subway tile tumeric freegan bicycle rights pabst before they sold out etsy. Meh actually fixie, small batch man bun wayfarers portland post-ironic kitsch lumbersexual jianbing. DIY you probably haven't heard of them mustache, wolf health goth crucifix sustainable polaroid bespoke thundercats.",
},
{
    id: 2,
    type: "Hipster",
    text: "Yr enamel pin literally polaroid church-key DIY pour-over chicharrones la croix ennui. Poutine wolf hoodie selfies sustainable gluten-free keytar food truck artisan banjo bushwick literally tumblr before they sold out aesthetic. Photo booth cred +1 squid tote bag. Wayfarers +1 offal, listicle poke unicorn banjo fashion axe hammock beard meggings. PBR&B authentic four dollar toast iPhone vegan, listicle air plant.",
},
{
    id: 3,
    type: "Hipster",
    text: "Tattooed banh mi crucifix blog, kombucha vinyl +1 man bun mixtape. Letterpress iPhone tumeric, art party 8-bit pour-over celiac venmo scenester sartorial mumblecore lumbersexual pabst enamel pin. Vice DIY tattooed shaman. Pork belly yr organic banjo coloring book tumblr drinking vinegar 3 wolf moon schlitz four dollar toast try-hard. Knausgaard raw denim mustache, four loko literally cred master cleanse meditation. Gochujang intelligentsia keytar shabby chic, fanny pack forage activated charcoal mustache poke heirloom pok pok.",
},
{
    id: 4,
    type: "Hipster",
    text: "Flannel authentic everyday carry lo-fi affogato fixie poutine hashtag lyft plaid. Unicorn intelligentsia post-ironic succulents banjo hoodie. Coloring book wayfarers yuccie, banjo mixtape synth PBR&B waistcoat lumbersexual health goth iPhone. Taiyaki +1 paleo fashion axe. Vape af blog polaroid tacos XOXO salvia jean shorts. Dreamcatcher drinking vinegar actually before they sold out, photo booth lyft meditation tofu DIY ugh.",
},
{
    id: 5,
    type: "Hipster",
    text: "Street art activated charcoal letterpress, occupy meditation pop-up blog post-ironic kombucha jean shorts 3 wolf moon kickstarter chillwave. Polaroid freegan shaman YOLO mustache chartreuse adaptogen cray XOXO lyft wayfarers ennui you probably haven't heard of them VHS cronut. Pinterest banh mi subway tile try-hard readymade brooklyn. Four loko taiyaki brunch, skateboard poke adaptogen live-edge neutra stumptown sartorial messenger bag meggings put a bird on it.",
},
{
    id: 6,
    type: "Pirate",
    text: "Come about pirate spanker poop deck nipperkin tackle lee hempen halter crow's nest jack. Chase guns list league landlubber or just lubber gaff parrel bring a spring upon her cable run a shot across the bow belaying pin line. Hempen halter topgallant yawl jib sutler Privateer draft Sail ho lad Yellow Jack.",
},
{
    id: 7,
    type: "Pirate",
    text: "Run a shot across the bow Pirate Round capstan Sail ho Nelsons folly interloper red ensign squiffy long boat grog blossom. No prey, no pay lass lanyard Jolly Roger scourge of the seven seas landlubber or just lubber lad hang the jib knave aft. Bounty fore mutiny walk the plank measured fer yer chains driver cable hornswaggle wherry yo-ho-ho.",
},
{
    id: 8,
    type: "Pirate",
    text: "Bounty doubloon aye Chain Shot nipper mizzenmast cog yo-ho-ho list black spot. Hempen halter Pirate Round lass chase guns hogshead log crow's nest man-of-war to go on account mizzenmast. Cat o'nine tails hornswaggle rutters grapple crow's nest parley Nelsons folly landlubber or just lubber capstan piracy.",
},
{
    id: 9,
    type: "Pirate",
    text: "Hail-shot come about Davy Jones' Locker tackle heave down long boat brig spyglass black spot mizzen. Quarterdeck salmagundi spike port aft list carouser knave black jack Pirate Round. Boom log cutlass poop deck strike colors gabion gunwalls keel coxswain Cat o'nine tails.",
},
{
    id: 10,
    type: "Pirate",
    text: "Port Davy Jones' Locker yawl Sail ho bring a spring upon her cable capstan tackle quarter topgallant Gold Road. Chase sheet Buccaneer heave to come about Shiver me timbers stern rigging lateen sail gabion. Log pressgang sloop dance the hempen jig lass fluke execution dock bring a spring upon her cable spike ballast.",
},
{
    id: 11,
    type: "Office",
    text: "Offline this discussion streamline. Closer to the metal we want to see more charts run it up the flag pole, and we’re starting to formalize flexible opinions around our foundations. Mobile friendly overcome key issues to meet key milestones blue sky but I have zero cycles for this, yet pre launch. Hammer out regroup disband the squad but rehydrate as needed for ladder up / ladder back to the strategy criticality . Can you put it into a banner that is not alarming, but eye catching and not too giant 4-blocker that jerk from finance really threw me under the bus, so flesh that out even dead cats bounce.",
},
{
    id: 12,
    type: "Office",
    text: "Dunder mifflin gage [sic] where the industry is heading and give back to the community what we’ve learned for we just need to put these last issues to bed churning anomalies. Downselect staff engagement, but time to open the kimono, so poop, nor can you put it on my calendar? nor price point, yet creativity requires you to murder your children. If you could do that, that would be great cross sabers, for let's unpack that later we need more paper get all your ducks in a row, but product market fit.",
},
{
    id: 13,
    type: "Office",
    text: "Horsehead offer that ipo will be a game-changer this is a no-brainer, so we’re starting to formalize flexible opinions around our foundations yet on your plate throughput wheelhouse. Hire the best we don't want to boil the ocean yet run it up the flag pole target rich environment. Make sure to include in your wheelhouse timeframe throughput.",
},
{
    id: 14,
    type: "Office",
    text: "Productize. Put your feelers out eat our own dog food we need to make the new version clean and sexy, or put your feelers out organic growth, yet net net. Incentivization one-sheet. We've got to manage that low hanging fruit globalize. Digitalize.",
},
{
    id: 15,
    type: "Office",
    text: "Bench mark we should leverage existing asserts that ladder up to the message or UX, so blue sky thinking, or great plan! let me diarize this, and we can synchronise ourselves at a later timepoint, face time, nor t-shaped individual. I also believe it's important for every member to be involved and invested in our company and this is one way to do so can you put it on my calendar?",
},
{
    id: 16,
    type: "Cosmos",
    text: "Another world inconspicuous motes of rock and gas made in the interiors of collapsing stars realm of the galaxies muse about galaxies. Rich in mystery descended from astronomers Orion's sword a mote of dust suspended in a sunbeam with pretty stories for which there's little good evidence concept of the number one?",
},
{
    id: 17,
    type: "Cosmos",
    text: "A very small stage in a vast cosmic arena citizens of distant epochs not a sunrise but a galaxyrise dream of the mind's eye emerged into consciousness something incredible is waiting to be known and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
},
{
    id: 18,
    type: "Cosmos",
    text: "Permanence of the stars hearts of the stars Tunguska event hydrogen atoms muse about rich in heavy atoms. Across the centuries with pretty stories for which there's little good evidence paroxysm of global death extraordinary claims require extraordinary evidence billions upon billions not a sunrise but a galaxyrise. The only home we've ever known the sky calls to us the sky calls to us billions upon billions finite but unbounded bits of moving fluff?",
},
{
    id: 19,
    type: "Cosmos",
    text: "Explorations shores of the cosmic ocean great turbulent clouds cosmic ocean prime number are creatures of the cosmos. Sea of Tranquility encyclopaedia galactica gathered by gravity bits of moving fluff network of wormholes two ghostly white figures in coveralls and helmets are softly dancing. Vanquish the impossible invent the universe take root and flourish two ghostly white figures in coveralls and helmets are softly dancing descended from astronomers the carbon in our apple pies.",
},
{
    id: 20,
    type: "Cosmos",
    text: "Two ghostly white figures in coveralls and helmets are softly dancing light years quasar another world something incredible is waiting to be known rogue. Not a sunrise but a galaxyrise extraordinary claims require extraordinary evidence rich in heavy atoms two ghostly white figures in coveralls and helmets are softly dancing invent the universe concept of the number one. Made in the interiors of collapsing stars citizens of distant epochs a mote of dust suspended in a sunbeam rich in mystery at the edge of forever invent the universe. ",
},

];
const form = document.querySelector('.lorem-form');
const select = document.querySelector('.type');
const amount = document.getElementById('amount')
const generate = document.querySelector('.button');
let loremText = document.querySelector('.lorem-text');

window.addEventListener('DOMContentLoaded', function(){
    typeFontFamily(select, select.value);
});

select.addEventListener("change", function(){
    typeFontFamily(select, select.value);
});

generate.addEventListener('click', function(e){
    // Prevent submit default of the form
    e.preventDefault();
    let nbParagraph = parseInt(amount.value);
    
    // Check if input OK 
    if(isNaN(nbParagraph) || nbParagraph < 0 || nbParagraph > 5){
        resetForm();
        typeFontFamily (select, select.value);
        amount.placeholder = "Number 0-5";
    }else {
        // Good to go
        let i = 0;
        let textTemp = "";
        text.forEach(function(item){
            if(i < nbParagraph) {
                if(item.type.toLowerCase() === select.value){
                    textTemp = textTemp.concat(`<p id = item-text class="${item.type}">${item.text}</p>`);
                    i++;
                };
            };
        });
        // push text in Output Text (article)
        loremText.innerHTML = textTemp;
        
        // Match fontFamily of paragraph(s) with type selected
        document.querySelectorAll('#item-text').forEach(function(p) {
            typeFontFamily(p, p.className);
        });
    };
});

function typeFontFamily (tag, tagvalue){
    switch (tagvalue){
        case "hipster":
        case "Hipster":
            tag.style.fontFamily = 'Pacifico';
            break;
        case "pirate":
        case "Pirate":
            tag.style.fontFamily = 'Pangolin';
            break;
        case "office":
        case "Office":
            tag.style.fontFamily = 'Roboto Mono';
            break;
        case "cosmos":
        case "Cosmos":
            tag.style.fontFamily = 'Shadows Into Light';
            break;
    };
};

function resetForm (){
    form.reset();
}

