export interface ProductStory {
    id: string;
    name: string;
    tagline: string;
    description: string;
    origin: string;
    history: string;
    image: string;
}

export const productStories: ProductStory[] = [
    {
        id: 'thekua',
        name: 'Thekua',
        tagline: 'The Sacred Prasad of Chhath',
        description: 'A deep-fried, earthen cookie made of whole wheat flour, melted jaggery, and fennel, marked with intricate wooden motifs.',
        origin: 'Bihar & Jharkhand',
        history: 'Thekua is not just a sweet; it is an emotion for the people of Bihar. Its history is tied to the ancient Vedic festival of Chhath Puja, dedicated to the Sun God. For centuries, devotees have prepared this prasad on earthen stoves (chulhas) using mango wood, maintaining absolute purity. The dough is pressed against wooden molds (sanchas) carved with floral or geometric patterns before being fried in pure ghee. It is believed that the blessings of the Sun God are infused in every bite, making it a powerful symbol of devotion and harvest.',
        image: '/products/Thekua.png'
    },
    {
        id: 'padukiya',
        name: 'Padukiya / Gujiya',
        tagline: 'The Crescent of Holi',
        description: 'A crescent-shaped fried pastry filled with sweetened khoya and dry fruits.',
        origin: 'Bihar & Uttar Pradesh',
        history: 'Known as "Padukiya" in Bihar and "Gujiya" in UP, this sweet is synonymous with the festival of Holi. The crescent shape is said to mimic the moon. Historically, preparing Padukiya was a social event where women of the household shares stories and bonds. It symbolizes joy, love, and the festival of colors.',
        image: '/products/Padukiya.png'
    },
    {
        id: 'nariyal-laddoo',
        name: 'Nariyal Laddoo',
        tagline: 'The Coastal Delight',
        description: 'Soft, snow-white balls made of fresh grated coconut and condensed milk.',
        origin: 'Coastal India',
        history: 'Coconut is considered the "fruit of the gods" (Sriphala). Nariyal Laddoos are the simplest yet most divine offering in temples across India. From the coasts of Gujarat to the shores of Bengal, this sweet celebrates the abundance of the coconut palm. It is traditionally made during Raksha Bandhan as a symbol of pure, unconditional love.',
        image: '/products/Nariyal Laddoo.png'
    },
    {
        id: 'dalmoth',
        name: 'Spicy Dalmoth',
        tagline: 'The Mughal Savory',
        description: 'A spicy, crunchy mixture of fried lentils (masoor dal), premium nuts, and spices.',
        origin: 'Uttar Pradesh',
        history: 'Dalmoth was perfected in the bazaars of North India—a mixture rich in dry fruits (a sign of royalty) and fried lentils (a staple of the common man). It is traditionally synonymous with "Sham-e-Awadh", the leisurely evenings of aristocratic North India. A savory snack to cleanse the palate after rich, sweet delicacies.',
        image: '/products/DalMoth.png'
    },
    {
        id: 'besan-ladoo',
        name: 'Besan Ke Laddoo',
        tagline: 'The Golden Sphere of Good Luck',
        description: 'Dense, aromatic balls of slow-roasted gram flour, ghee, sugar, and cardamom.',
        origin: 'North India',
        history: 'Besan Ladoo holds a sacred place in Indian culture. It is the first sweet offered to Lord Ganesha, the remover of obstacles, before beginning any new venture. The magic lies in the process—the chickpea flour (Besan) must be roasted in ghee over a slow flame for hours until it turns golden-brown and releases a nutty aroma. This process, known as "Bhunaai", cannot be rushed. It is the sweet of patience, love, and new beginnings.',
        image: '/products/Besan Ke Laddoo.png'
    }
];
