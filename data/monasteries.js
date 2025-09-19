// Monasteries Data for Sikkim Heritage Site
// Each monastery contains complete information for dynamic loading

const monasteries = [
    {
        id: 'rumtek',
        name: 'Rumtek Monastery',
        subtitle: 'Dharma Chakra Centre - Seat of the Gyalwang Karmapa',
        description: `The magnificent Rumtek Monastery, also known as the "Dharma Chakra Centre," stands as one of the most significant seats of Tibetan Buddhism outside Tibet. Built in 1966 by the 16th Karmapa, this stunning monastery serves as the seat-in-exile of the Gyalwang Karmapa, the head of the Karma Kagyu lineage.

        The monastery features traditional Tibetan architecture with golden stupas, intricate murals, and houses precious Buddhist artifacts including ancient thangkas, statues, and ritual objects. The main shrine room contains a magnificent golden stupa containing relics of the 16th Karmapa, making it one of the most sacred sites in the region.

        Visitors can witness daily prayer ceremonies, explore the monastery museum with its collection of ritual objects, and experience the peaceful atmosphere that pervades this spiritual center. The complex also includes a shedra (monastic university) where monks study Buddhist philosophy and meditation practices.`,
        
        culturalNotes: `Rumtek represents the continuation of a 900-year-old lineage tradition in exile. The monastery follows the Karma Kagyu school of Tibetan Buddhism, known for its emphasis on meditation and the recognition of reincarnate lamas (tulkus). The architectural design mirrors the original Tsurphu Monastery in Tibet, symbolizing the preservation of Tibetan Buddhist culture. The monastery plays a crucial role in maintaining the spiritual and cultural identity of the Tibetan refugee community in Sikkim.`,
        
        facts: [
            { label: 'Founded', value: '1966' },
            { label: 'Lineage', value: 'Karma Kagyu' },
            { label: 'Distance from Gangtok', value: '24 km' },
            { label: 'Altitude', value: '1,550 meters' },
            { label: 'Resident Monks', value: '300+' },
            { label: 'Significance', value: 'Seat of 17th Karmapa' }
        ],
        
        audioFile: 'assets/audio/rumtek-guided-tour.mp3',
        mapsEmbed: 'https://www.google.com/maps/embed?pb=!4v1758042078927!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRDJnWVdjb2dF!2m2!1d27.2885258949387!2d88.56180959787903!3f255.0022057468364!4f4.537864799479607!5f0.7820865974627469',
        heroImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&h=900&fit=crop&q=80',
        lat: 27.2885258949387,
        lng: 88.56180959787903
    },
    
    {
        id: 'phodong',
        name: 'Phodong Monastery',
        subtitle: 'Ancient Center of Karma Kagyu Tradition',
        description: `Built in the early 18th century by the 9th Karmapa, Phodong Monastery stands as a testament to the enduring spiritual traditions of Sikkim. This sacred complex houses approximately 260 monks and features some of the most exquisite ancient murals in the region, depicting Buddhist deities and spiritual teachings.

        The monastery is renowned for its spectacular Chaam dance festivals, where monks perform sacred masked dances that tell stories of good triumphing over evil. These performances, held annually, are among the most authentic displays of Tibetan Buddhist ritual art in the Himalayas. The intricate artwork and peaceful atmosphere make it a perfect place for meditation and spiritual contemplation.

        The monastery's architecture follows traditional Tibetan design principles, with prayer halls, residential quarters for monks, and meditation rooms arranged around central courtyards. The main assembly hall houses ancient statues and manuscripts, while the upper floors provide stunning views of the surrounding valleys.`,
        
        culturalNotes: `Phodong exemplifies the artistic and spiritual heritage of the Karma Kagyu lineage in Sikkim. The monastery's murals are considered masterpieces of Himalayan Buddhist art, depicting both protective deities and peaceful buddhas in vivid detail. These paintings serve as both decoration and religious instruction, helping practitioners visualize complex meditative practices. The annual festivals here maintain centuries-old traditions of sacred performance art, connecting the community to their spiritual roots.`,
        
        facts: [
            { label: 'Founded', value: 'Early 18th century' },
            { label: 'Founder', value: '9th Karmapa' },
            { label: 'Lineage', value: 'Karma Kagyu' },
            { label: 'Distance from Gangtok', value: '28 km' },
            { label: 'Resident Monks', value: '260+' },
            { label: 'Famous For', value: 'Chaam Dance Festival' }
        ],
        
        audioFile: 'assets/audio/phodong-guided-tour.mp3',
        mapsEmbed: 'https://www.google.com/maps/embed?pb=!4v1758042194389!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJREUtSTJBbXdF!2m2!1d27.41250043052966!2d88.58361050014649!3f2.712514234207955!4f-8.616152838125558!5f0.7820865974627469',
        heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1600&h=900&fit=crop&q=80',
        lat: 27.41250043052966,
        lng: 88.58361050014649
    },
    
    {
        id: 'pemayangtse',
        name: 'Pemayangtse Monastery',
        subtitle: 'Perfect Sublime Lotus - Premier Nyingma Monastery',
        description: `Pemayangtse, meaning "Perfect Sublime Lotus," stands as one of Sikkim's oldest and most prestigious monasteries. Founded in 1647, this Nyingma sect monastery represents the pinnacle of Buddhist architectural and spiritual achievement in the region. The monastery holds the distinction of being one of the most important Nyingma monasteries in the Himalayas.

        The monastery is famous for its seven-tiered wooden sculpture representing Guru Rinpoche's celestial paradise, Zangdokpalri. This intricate masterpiece took five years to complete and depicts the three-dimensional mandala of Guru Padmasambhava's pure land, complete with 108 deities and celestial beings. The craftsmanship is so detailed that it's considered one of the finest examples of Himalayan religious art.

        Visitors can explore the monastery's three floors, each dedicated to different aspects of Buddhist practice. The ground floor houses protective deities, the middle floor features the main assembly hall with ancient statues, and the top floor is reserved for the most sacred images and the famous wooden structure.`,
        
        culturalNotes: `As the premier Nyingma monastery in Sikkim, Pemayangtse holds special significance in preserving the oldest school of Tibetan Buddhism. Historically, only the purest monks, those of pure Tibetan descent, were allowed to reside here, maintaining the monastery's reputation for spiritual purity and scholarly excellence. The monastery played a crucial role in the political and religious history of Sikkim, with its head lama often serving as advisor to the Sikkimese royal family.`,
        
        facts: [
            { label: 'Founded', value: '1647' },
            { label: 'Lineage', value: 'Nyingma' },
            { label: 'Location', value: 'Pelling, West Sikkim' },
            { label: 'Altitude', value: '2,085 meters' },
            { label: 'Famous For', value: 'Zangdokpalri Wooden Structure' },
            { label: 'Significance', value: 'Second oldest monastery in Sikkim' }
        ],
        
        audioFile: 'assets/audio/pemayangtse-guided-tour.mp3',
        mapsEmbed: 'https://www.google.com/maps/embed?pb=!4v1758042228009!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ0U3SXFEeFFF!2m2!1d27.30426034149243!2d88.30153660084635!3f336.3037987225419!4f7.389416653445608!5f0.7820865974627469',
        heroImage: 'https://images.unsplash.com/photo-1580500550469-11c86cf7e097?w=1600&h=900&fit=crop&q=80',
        lat: 27.30426034149243,
        lng: 88.30153660084635
    },
    
    {
        id: 'dodrul',
        name: 'Do Drul Chorten',
        subtitle: 'Sacred Stupa with 108 Prayer Wheels',
        description: `Built in 1945 by Trulshik Rinpoche, Do Drul Chorten stands as one of the most important and magnificent stupas in Sikkim. This sacred structure contains precious relics including Dorjee Phurba (ritual daggers), complete Kangyur holy books, and other religious objects of immense spiritual value that were blessed by high lamas.

        The stupa is surrounded by 108 prayer wheels, each inscribed with the sacred mantra "Om Mani Padme Hum" and other powerful mantras. Devotees circumambulate the stupa while spinning these prayer wheels, creating a meditative atmosphere filled with the gentle sound of turning metal and whispered prayers. This practice is believed to accumulate merit and purify negative karma.

        The architecture of the chorten follows traditional Buddhist stupa design, with its dome representing the Buddha's mind, the spire symbolizing the path to enlightenment, and the base representing the earth element. The white-washed structure is adorned with colorful prayer flags that flutter in the mountain breeze.`,
        
        culturalNotes: `Do Drul Chorten represents the synthesis of various Tibetan Buddhist traditions in Sikkim. The number 108 holds deep significance in Buddhist cosmology, representing the 108 defilements of human nature that must be overcome to achieve enlightenment. The stupa serves as a focal point for meditation and merit-making activities, demonstrating the living tradition of Buddhist practice in modern Sikkim. It's also one of the most accessible sacred sites, located in the heart of Gangtok.`,
        
        facts: [
            { label: 'Built', value: '1945' },
            { label: 'Builder', value: 'Trulshik Rinpoche' },
            { label: 'Location', value: 'Central Gangtok' },
            { label: 'Prayer Wheels', value: '108' },
            { label: 'Contains', value: 'Sacred Relics & Kangyur' },
            { label: 'Type', value: 'Buddhist Stupa (Chorten)' }
        ],
        
        audioFile: 'assets/audio/dodrul-guided-tour.mp3',
        mapsEmbed: 'https://www.google.com/maps/embed?pb=!4v1758042339362!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRDR4b0xXSHc.!2m2!1d27.31556322124544!2d88.60507967331893!3f228.80227971232688!4f-4.54706375073205!5f0.7820865974627469',
        heroImage: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1600&h=900&fit=crop&q=80',
        lat: 27.31556322124544,
        lng: 88.60507967331893
    },
    
    {
        id: 'gongjang',
        name: 'Gongjang Monastery',
        subtitle: 'Modern Spiritual Center at High Altitude',
        description: `Established in 1981 at an impressive altitude of 6,066 feet, Gongjang Monastery represents the continuation of Buddhist traditions into the modern era. Founded by H.E. Tingkye Gonjang Rinpoche, this monastery serves as an important spiritual center for the local Buddhist community and demonstrates how ancient wisdom adapts to contemporary times.

        Despite being relatively young compared to other monasteries in Sikkim, Gongjang has quickly established itself as a center of learning and meditation. The monastery's high-altitude location provides stunning views of the surrounding Himalayan peaks and creates an atmosphere conducive to deep spiritual practice. The clear mountain air and serene environment make it an ideal place for retreat and contemplation.

        The monastery follows contemporary approaches to Buddhist education while maintaining traditional meditation and ritual practices. It serves as a community center for local Buddhists and offers teachings accessible to both monks and lay practitioners.`,
        
        culturalNotes: `Gongjang Monastery demonstrates the living nature of Buddhist tradition in Sikkim, showing how new centers of learning and practice continue to emerge in response to community needs. The monastery represents the adaptability of Buddhist institutions to modern circumstances while preserving essential spiritual practices. Its establishment in the 1980s coincided with renewed interest in Buddhist practice among both Tibetan refugees and local Sikkimese communities.`,
        
        facts: [
            { label: 'Established', value: '1981' },
            { label: 'Founder', value: 'H.E. Tingkye Gonjang Rinpoche' },
            { label: 'Altitude', value: '6,066 feet (1,849 meters)' },
            { label: 'Type', value: 'Modern Monastery' },
            { label: 'Focus', value: 'Community Buddhist Education' },
            { label: 'Views', value: 'Himalayan Peaks' }
        ],
        
        audioFile: 'assets/audio/gongjang-guided-tour.mp3',
        mapsEmbed: 'https://www.google.com/maps/embed?pb=!4v1758042370131!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ09pcHptdVFF!2m2!1d27.36887129235672!2d88.613241197712!3f15.581429593112716!4f9.297523540922128!5f0.7820865974627469',
        heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop&q=80',
        lat: 27.36887129235672,
        lng: 88.613241197712
    },
    
    {
        id: 'rey',
        name: 'Rey Monastery',
        subtitle: 'Ray Mindu Katen Namgyaling Gonpa',
        description: `Rey Monastery, also known as Ray Mindu Katen Namgyaling Gonpa, is strategically located atop a hill between the famous Rumtek Monastery and Ranka village. Originally functioning as a Manilhakhang (prayer wheel house), this monastery was established in 1873 by devoted Kagyu followers who sought to create a center for spiritual practice in this scenic location.

        The monastery's elevated position offers panoramic views of the surrounding valleys and mountains, making it a perfect place for contemplation and meditation. The peaceful atmosphere and traditional architecture create a serene environment for spiritual practice. The complex includes prayer halls, meditation rooms, and quarters for resident monks.

        What makes Rey Monastery unique is its evolution from a simple prayer wheel house to a full-fledged monastery, demonstrating the organic growth of Buddhist institutions based on community needs and devotion.`,
        
        culturalNotes: `Rey Monastery exemplifies the grassroots development of Buddhist institutions in Sikkim. Originally established as a Manilhakhang (prayer wheel house), it evolved into a full monastery through the dedication and devotion of local practitioners. This transformation shows how communities can nurture and develop their spiritual centers over time. The monastery represents the democratic nature of Buddhist practice, where community involvement shapes religious institutions.`,
        
        facts: [
            { label: 'Founded', value: '1873' },
            { label: 'Original Name', value: 'Ray Mindu Katen Namgyaling Gonpa' },
            { label: 'Lineage', value: 'Kagyu' },
            { label: 'Location', value: 'Between Rumtek & Ranka' },
            { label: 'Original Function', value: 'Manilhakhang (Prayer Wheel House)' },
            { label: 'Views', value: 'Panoramic Valley Views' }
        ],
        
        audioFile: 'assets/audio/rey-guided-tour.mp3',
        mapsEmbed: 'https://www.google.com/maps/embed?pb=!4v1758042397625!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ3kwTGp4MlFF!2m2!1d27.31989461682285!2d88.5603530692306!3f280!4f0!5f0.7820865974627469',
        heroImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&h=900&fit=crop&q=80',
        lat: 27.31989461682285,
        lng: 88.5603530692306
    },
    
    {
        id: 'durpin',
        name: 'Durpin Monastery',
        subtitle: 'Hilltop Sanctuary with Himalayan Views',
        description: `Perched majestically atop Durpin Dara Hill in Kalimpong, Durpin Monastery was built in 1970 by the renowned Dudjom Rinpoche, one of the most respected masters of the Nyingma lineage. This Tibetan Buddhist monastery houses an impressive collection of 108 volumes of Buddhist scriptures (Kangyur) that were personally placed and blessed by His Holiness the 14th Dalai Lama.

        The monastery's hilltop location provides breathtaking panoramic views of the Eastern Himalayas, including glimpses of Mount Kanchenjunga on clear days. The serene environment and stunning vistas make it a popular destination for both spiritual seekers and visitors interested in Buddhist culture and Himalayan scenery.

        The monastery serves as both a spiritual center and a center for Buddhist studies, with the complete Kangyur collection making it an important repository of Buddhist literature in the region. The peaceful atmosphere and spectacular natural setting create ideal conditions for meditation and spiritual practice.`,
        
        culturalNotes: `Durpin Monastery represents the expansion of Tibetan Buddhist influence beyond Sikkim into the broader Himalayan region of West Bengal. The presence of the complete Kangyur collection, personally blessed by the Dalai Lama, makes it a significant center for Buddhist scholarship and study. The monastery also demonstrates the adaptation of Tibetan Buddhism to Indian conditions while maintaining authentic traditional practices and teachings.`,
        
        facts: [
            { label: 'Built', value: '1970' },
            { label: 'Founder', value: 'Dudjom Rinpoche' },
            { label: 'Location', value: 'Kalimpong, West Bengal' },
            { label: 'Scriptures', value: '108 Kangyur Volumes' },
            { label: 'Blessed By', value: '14th Dalai Lama' },
            { label: 'Views', value: 'Mount Kanchenjunga' }
        ],
        
        audioFile: 'assets/audio/durpin-guided-tour.mp3',
        mapsEmbed: 'https://www.google.com/maps/embed?pb=!4v1758042476814!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQzRwb3V2SWc.!2m2!1d27.03819508162899!2d88.46082851382117!3f170.85233956074546!4f16.808567761987618!5f0.7820865974627469',
        heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1600&h=900&fit=crop&q=80',
        lat: 27.03819508162899,
        lng: 88.46082851382117
    },
    
    {
        id: 'samdruptse',
        name: 'Samdruptse Monastery',
        subtitle: 'Wish-Fulfilling Hill with Giant Guru Statue',
        description: `Located on Samdruptse hill near Namchi in South Sikkim, this remarkable site features the world's tallest statue of Guru Padmasambhava (Guru Rinpoche) at an impressive height of 135 feet. The name "Samdruptse" literally means "wish-fulfilling hill" in the local language, and pilgrims from across the Himalayas believe that prayers offered here carry special power and efficacy.

        The colossal statue, completed in 2004, can be seen from miles away and serves as a beacon of Buddhist faith in the region. The statue depicts Guru Rinpoche in his peaceful aspect, with intricate details carved into the copper structure. The complex also includes meditation halls, prayer rooms, and facilities for pilgrims.

        The site offers spectacular views of the snow-capped Kanchenjunga range and the surrounding valleys, creating a perfect setting for meditation and spiritual contemplation. The combination of the monumental statue and the natural beauty makes it one of the most photographed religious sites in Sikkim.`,
        
        culturalNotes: `Samdruptse represents the modern expression of ancient Buddhist devotion and the continuing reverence for Guru Padmasambhava in the Himalayan region. Guru Rinpoche, known as the "Second Buddha," is credited with introducing Buddhism to Tibet and the Himalayas in the 8th century. The monumental statue serves as a pilgrimage destination and a symbol of the enduring presence of Buddhist teachings in Sikkim. The site demonstrates how traditional devotion adapts to contemporary expressions while maintaining spiritual authenticity.`,
        
        facts: [
            { label: 'Statue Completed', value: '2004' },
            { label: 'Statue Height', value: '135 feet (41 meters)' },
            { label: 'Location', value: 'Near Namchi, South Sikkim' },
            { label: 'Deity', value: 'Guru Padmasambhava' },
            { label: 'Significance', value: 'Wish-Fulfilling Hill' },
            { label: 'Views', value: 'Kanchenjunga Range' }
        ],
        
        audioFile: 'assets/audio/samdruptse-guided-tour.mp3',
        mapsEmbed: 'https://www.google.com/maps/embed?pb=!4v1758042532272!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ0V2NkxaTlE.!2m2!1d27.17976886165958!2d88.37928758778976!3f68.35058490524906!4f13.31311104157578!5f0.7820865974627469',
        heroImage: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1600&h=900&fit=crop&q=80',
        lat: 27.17976886165958,
        lng: 88.37928758778976
    },
    
    {
        id: 'dubdi',
        name: 'Dubdi Buddhist Monastery',
        subtitle: 'The Oldest Monastery in Sikkim - The Retreat',
        description: `Dubdi Monastery holds the distinguished honor of being the oldest monastery in Sikkim, established in 1701 near the historic town of Yuksom. Built by Lhatsun Namkha Jigme, one of the three venerated lamas who crowned the first Chogyal (king) of Sikkim, this Nyingma sect monastery literally means "the retreat" in the Tibetan language.

        Located on a hilltop about an hour's trek from Yuksom, the monastery is an integral part of the Buddhist pilgrimage circuit in Sikkim. The journey to Dubdi itself is considered a form of meditation, as pilgrims walk through pristine forests and mountain paths to reach this sacred site. Despite its age of over 300 years, Dubdi maintains its original charm and spiritual atmosphere.

        The monastery houses ancient statues, manuscripts, and religious artifacts that provide insight into the early development of Buddhism in Sikkim. The simple yet profound architecture reflects the austere nature of early monastic life, focusing on spiritual practice rather than elaborate decoration.`,
        
        culturalNotes: `Dubdi Monastery represents the historical foundation of organized Buddhism in Sikkim and its significance extends beyond religion to the political and cultural formation of the Sikkimese state. Its establishment in 1701 marked the beginning of the Buddhist kingdom under the Namgyal dynasty. The monastery's location near Yuksom, the first capital of Sikkim, underscores its historical importance. As the oldest surviving monastery, it serves as a link to the earliest period of Buddhist practice in the region and maintains traditions that have been passed down for over three centuries.`,
        
        facts: [
            { label: 'Founded', value: '1701' },
            { label: 'Founder', value: 'Lhatsun Namkha Jigme' },
            { label: 'Status', value: 'Oldest Monastery in Sikkim' },
            { label: 'Location', value: 'Near Yuksom, West Sikkim' },
            { label: 'Meaning', value: 'The Retreat' },
            { label: 'Trek Duration', value: '1 hour from Yuksom' }
        ],
        
        audioFile: 'assets/audio/dubdi-guided-tour.mp3',
        mapsEmbed: 'https://www.google.com/maps/embed?pb=!4v1758042569140!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ0VfNWJDZlE.!2m2!1d27.36641022759916!2d88.22990891649984!3f32.670879350452644!4f10.666279509148467!5f0.7820865974627469',
        heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop&q=80',
        lat: 27.36641022759916,
        lng: 88.22990891649984
    }
];

// Export the data
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { monasteries };
} else if (typeof window !== 'undefined') {
    window.monasteriesData = { monasteries };
}
