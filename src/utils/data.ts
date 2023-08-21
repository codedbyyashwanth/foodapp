/* eslint-disable prettier/prettier */
interface CuisineDatatype {
        id: number,
        label: string,
}

interface DishesType {
        id: number,
        label: string,
        url: string
}

export interface AllDishesType {
        id: number,
        name: string,
        image: string,
        rating: number,
        equipments: Array<string>,
        description: string,
}

export const CuisineData:Array<CuisineDatatype> = [ {
                id: 1,
                label: 'Indian',
        }, {
                id: 2,
                label: 'Italian',
        }, {
                id: 3,
                label: 'French',
        }, {
                id: 4,
                label: 'Japanese',
        }, {
                id: 5,
                label: 'Chinese',
        }, {
                id: 6,
                label: 'Mexican',
}];

export const DishesData:Array<DishesType> = [{
                id: 1,
                label: 'Daal Batti',
                url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        }, {
                id: 2,
                label: 'Biryani',
                url: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        }, {
                id: 3,
                label: 'Veg Korma',
                url: 'https://media.gettyimages.com/id/1298602336/photo/close-up-image-of-turquoise-blue-cooking-pan-filled-with-indian-butter-chicken-tikka-curry.jpg?s=612x612&w=0&k=20&c=PBISdnFmGWsgXQUd0oSPEw-AbAXuvzxJBKjtHV1iXQw=',
        }, {
                id: 4,
                label: 'Chicken Korma',
                url: 'https://st4.depositphotos.com/18645588/25024/i/450/depositphotos_250242310-stock-photo-chicken-korma-delicious-spicy-thick.jpg',
        }, {
                id: 5,
                label: 'Salad',
                url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        }, {
                id: 6,
                label: 'Fried Rice',
                url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
        }, {
                id: 7,
                label: 'Cake',
                url: 'https://images.unsplash.com/photo-1579306194872-64d3b7bac4c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1117&q=80',
        },
];


export const AllDishes:Array<AllDishesType> = [
        {
                name: 'Masala Mughlai',
                rating: 4.2,
                description: 'Chicken fried in deep tomato sauce with delicious spices',
                equipments: [
                'Refrigerator',
                'Microwave',
                ],
                image: 'https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg',
                id: 1,
        },
        {
                name: 'Masala Paneer',
                rating: 4.3,
                description: 'Paneer tossed in gravy',
                equipments: [
                'Microwave',
                ],
                image: 'https://media.gettyimages.com/id/1305517512/photo/shahi-paneer-or-paneer-kadai.jpg?s=612x612&w=0&k=20&c=VAO3XD_LQxRqW41qvhyyM96R0tuTPEVuul_8O7BOliw=',
                id: 2,
        },
        {
                name: 'Masala Mughlai',
                rating: 4.2,
                description: 'Chicken fried in deep tomato sauce with delicious spices',
                equipments: [
                'Refrigerator',
                'Microwave',
                ],
                image: 'https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg',
                id: 1,
        },
        {
                name: 'Masala Paneer',
                rating: 4.3,
                description: 'Paneer tossed in gravy',
                equipments: [
                'Microwave',
                ],
                image: 'https://media.gettyimages.com/id/1305517512/photo/shahi-paneer-or-paneer-kadai.jpg?s=612x612&w=0&k=20&c=VAO3XD_LQxRqW41qvhyyM96R0tuTPEVuul_8O7BOliw=',
                id: 2,
        },
        {
                name: 'Masala Mughlai',
                rating: 4.2,
                description: 'Chicken fried in deep tomato sauce with delicious spices',
                equipments: [
                'Refrigerator',
                'Microwave',
                ],
                image: 'https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg',
                id: 1,
        },
        {
                name: 'Masala Paneer',
                rating: 4.3,
                description: 'Paneer tossed in gravy',
                equipments: [
                'Microwave',
                ],
                image: 'https://media.gettyimages.com/id/1305517512/photo/shahi-paneer-or-paneer-kadai.jpg?s=612x612&w=0&k=20&c=VAO3XD_LQxRqW41qvhyyM96R0tuTPEVuul_8O7BOliw=',
                id: 2,
        },
        {
                name: 'Masala Mughlai',
                rating: 4.2,
                description: 'Chicken fried in deep tomato sauce with delicious spices',
                equipments: [
                'Refrigerator',
                'Microwave',
                ],
                image: 'https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg',
                id: 1,
        },
        {
                name: 'Masala Paneer',
                rating: 4.3,
                description: 'Paneer tossed in gravy',
                equipments: [
                'Microwave',
                ],
                image: 'https://media.gettyimages.com/id/1305517512/photo/shahi-paneer-or-paneer-kadai.jpg?s=612x612&w=0&k=20&c=VAO3XD_LQxRqW41qvhyyM96R0tuTPEVuul_8O7BOliw=',
                id: 2,
        },
        {
                name: 'Masala Mughlai',
                rating: 4.2,
                description: 'Chicken fried in deep tomato sauce with delicious spices',
                equipments: [
                'Refrigerator',
                'Microwave',
                ],
                image: 'https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg',
                id: 1,
        },
        {
                name: 'Masala Paneer',
                rating: 4.3,
                description: 'Paneer tossed in gravy',
                equipments: [
                'Microwave',
                ],
                image: 'https://media.gettyimages.com/id/1305517512/photo/shahi-paneer-or-paneer-kadai.jpg?s=612x612&w=0&k=20&c=VAO3XD_LQxRqW41qvhyyM96R0tuTPEVuul_8O7BOliw=',
                id: 2,
        },
];

