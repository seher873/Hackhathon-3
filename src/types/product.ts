export interface Product {
      _id: string;
      name: string;
      _type: "production";
      discountPercentage: number;
      price: number;
      isFeaturedProduct: boolean; 
      stockLevel: number;
      category: string;
      quantity?: number; 



      
      code: number;
      colors?: string[];
      
      image: {
        asset: { 
          _ref: string;
          _type: string; 
        };
      };
    
      slug: {
        _type: "slug";
        current: string;
      };
    }
