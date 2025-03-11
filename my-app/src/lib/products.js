// Ignore this page... this is old version of Item.js page.


import { writable } from 'svelte/store';

//Store Merchandise
export const products = writable([
    // {
    //     id: #,
    //     name: "text here",
    //     shortDescription: "text here",
    //     longDescription: "text here",
    //     price: 85,
    //     tags: ["tag1", "tag2"],
    //     quantity: 1,  // Quantity in the cart
    //     totalAvailable: 10,  // Total stock
    //     image: "graystone-vase.jpg",
    //     dimensions: {
    //         height: 12,  // in inches
    //         width: 6,
    //         depth: 6
    //     }
    // },
    {
        id: "1",
        name: "Terra Rustic Clay Pot",
        shortDescription: "Handcrafted terracotta pot with a classic design.",
        longDescription: "A timeless terracotta plant pot with a natural, rustic finish, perfect for both indoor and outdoor plants. Porous clay allows for healthy plant growth.",
        price: 25.99,
        tags: ["plantPots"],
        quantity: 1,  // Quantity in the cart
        totalAvailable: 50,  // Total stock
        heroImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739151560/hero_TerraRusticClayPot_qxmlga.png",
        productImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739154241/product_TerraRusticClayPot_tofdoo.png",
        cartImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739153340/cart_TerraRusticClayPot_tcp674.png",
        height: 10,  // in inches
        width: 8,
        depth: 8

    },
    {
        id: "2",
        name: "Minimalist White Ceramic Planter",
        shortDescription: "Sleek ceramic pot with a modern matte finish.",
        longDescription: "A stylish ceramic planter with a minimalist white matte glaze. Ideal for contemporary home décor and suitable for small indoor plants.",
        price: 34.99,
        tags: ["plantPots"],
        quantity: 1,  // Quantity in the cart
        totalAvailable: 40,  // Total stock
        heroImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739151151/hero_MinimalistWhiteCeramicPlanter_n9cqpt.png",
        productImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739154274/product_MinimalistWhiteCeramicPlanter_nakk53.png",
        cartImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739153334/cart_MinimalistWhiteCeramicPlanter_lgjzqg.png",        
        height: 8,  // in inches
        width: 7,
        depth: 7
    },
    {
        id: "3",
        name: "Hanging Woven Basket Planter",
        shortDescription: "Handwoven basket planter for hanging plants.",
        longDescription: "A durable, handwoven seagrass planter with a built-in rope for hanging. Great for ferns, pothos, and trailing plants.",
        price: 29.99,
        tags: ["plantPots"],
        quantity: 1,  // Quantity in the cart
        totalAvailable: 30,  // Total stock
        heroImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739151147/hero_HangingWovenBasketPlanter_mw2dz0.png",
        productImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739154284/product_HangingWovenBasketPlanter_w5e4wz.png",
        cartImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739153332/cart_HangingWovenBasketPlanter_nx7jjl.png",
        height: 9,  // in inches
        width: 10,
        depth: 10
    },
    {
        id: "4",
        name: "Hand-Painted Floral Vase",
        shortDescription: "Delicate ceramic vase with intricate floral patterns.",
        longDescription: "This hand-painted vase features vibrant floral detailing on a glossy ceramic surface, perfect for fresh or dried flowers.",
        price: 45.99,
        tags: ["ceramics"],
        quantity: 1,  // Quantity in the cart
        totalAvailable: 25,  // Total stock
        heroImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739151146/hero_Hand-PaintedFloralVase_nukdwq.png",
        productImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739154266/product_Hand-PaintedFloralVase_shoks1.png",
        cartImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739153330/cart_Hand-PaintedFloralVase_bd4jzl.png",
        height: 12,  // in inches
        width: 6,
        depth: 6
    },
    {
        id: "5",
        name: "Earth-Toned Ceramic Bowl Set (Set of 3)",
        shortDescription: "Neutral-toned ceramic bowls for dining and décor.",
        longDescription: "A set of three ceramic bowls with earthy hues and a speckled glaze. Ideal for serving meals or as decorative accent pieces.",
        price: 59.99,
        tags: ["ceramics"],
        quantity: 1,  // Quantity in the cart
        totalAvailable: 20,  // Total stock
        heroImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739151143/hero_Earth-TonedCeramicBowlSet_y7midc.png",
        productImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739154259/product_Earth-TonedCeramicBowlSet_mm918s.png",
        cartImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739153328/cart_Earth-TonedCeramicBowlSet_pzthzz.png",
        height: 4,  // in inches
        width: 7,
        depth: 7
    },
    {
        id: "6",
        name: "Textured Stoneware Mug",
        shortDescription: "Handmade ceramic mug with a unique texture.",
        longDescription: "A durable stoneware mug with a rough-textured surface and smooth-glazed interior, providing a perfect balance of style and function.",
        price: 18.99,
        tags: ["ceramics"],
        quantity: 1,  // Quantity in the cart
        totalAvailable: 60,  // Total stock
        heroImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739151561/hero_TexturedStonewareMug_ww9kid.png",
        productImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739154243/product_TexturedStonewareMug_vzybf9.png",
        cartImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739153342/cart_TexturedStonewareMug_o6euxc.png",
        height: 5,  // in inches
        width: 3.5,
        depth: 3.5 
    },
    {
        id: "7",
        name: "Scandinavian Oak Coffee Table",
        shortDescription: "Elegant oak table with a minimalist design.",
        longDescription: "A mid-century modern coffee table crafted from solid oak with a smooth finish, ideal for contemporary and minimalist interiors.",
        price: 199.99,
        tags: ["tables"],
        quantity: 1,  // Quantity in the cart
        totalAvailable: 15,  // Total stock
        heroImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739151156/hero_ScandinavianOakCoffeeTable_rqt61o.png",
        productImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739154289/product_ScandinavianOakCoffeeTable_vqoe3b.png",
        cartImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739153338/cart_ScandinavianOakCoffeeTable_txtpjh.png",
        height: 18,  // in inches
        width: 40,
        depth: 20
    },
    {
        id: "8",
        name: "Rustic Farmhouse Dining Table",
        shortDescription: "Solid wood dining table with a rustic charm.",
        longDescription: "A sturdy wooden dining table with a distressed finish, blending traditional and contemporary aesthetics for a cozy dining experience.",
        price: 299.99,
        tags: ["tables"],
        quantity: 1,  // Quantity in the cart
        totalAvailable: 10,  // Total stock
        heroImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739151154/hero_RusticFarmhouseDiningTable_ov4y6u.png",
        productImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739154287/product_RusticFarmhouseDiningTable_svfhyl.png",
        cartImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739153336/cart_RusticFarmhouseDiningTable_i03jvn.png", 
        height: 30,  // in inches
        width: 72,
        depth: 26
    }
    // ,
    // {
    //     id: 9,
    //     name: "Modern Glass-Top Side Table",
    //     shortDescription: "Sleek side table with a tempered glass top.",
    //     longDescription: "A contemporary side table featuring a metal frame and a durable tempered glass top, perfect for accentuating any living space.",
    //     price: 149.99,
    //     tags: ["tables"],
    //     quantity: 1,  // Quantity in the cart
    //     totalAvailable: 20,  // Total stock
    //     heroImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739151152/hero_ModernGlass-TopSideTable_rgmxi1.png",
    //     productImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739154277/product_ModernGlass-TopSideTable_j7a7uq.png",
    //     cartImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739153319/cart_ModernGlass-TopSideTable_wdjpye.png",
    //     height: 22,  // in inches
    //     width: 18,
    //     depth: 18
    // },
    // {
    //     id: 10,
    //     name: "Vintage Wooden Armchair",
    //     shortDescription: "Classic wooden chair with a cushioned seat.",
    //     longDescription: "A timeless armchair with a sturdy wooden frame, elegant curves, and a comfortable padded seat, great for living or dining rooms.",
    //     price: 249.99,
    //     tags: ["chair"],
    //     quantity: 1,  // Quantity in the cart
    //     totalAvailable: 12,  // Total stock
    //     heroImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739151563/hero_VintageWoodenArmchair_w91bgt.png",
    //     productImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739154245/product_VintageWoodenArmchair_aigqur.png",
    //     cartImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739153325/cart_VintageWoodenArmchair_xxk0mc.png",
    //     height: 34,  // in inches
    //     width: 22,
    //     depth: 24
    // },
    // {
    //     id: 11,
    //     name: "Mid-Century Lounge Chair",
    //     shortDescription: "Retro-inspired lounge chair with soft upholstery.",
    //     longDescription: " A stylish lounge chair with a wooden frame and plush cushions, bringing a cozy and sophisticated feel to any space.",
    //     price: 299.99,
    //     tags: ["chair"],
    //     quantity: 1,  // Quantity in the cart
    //     totalAvailable: 8,  // Total stock
    //     heroImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739151149/hero_Mid-CenturyLoungeChair_hdufk6.png",
    //     productImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739154271/product_Mid-CenturyLoungeChair_phmw4h.png",
    //     cartImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739153318/cart_Mid-CenturyLoungeChair_qmd552.png",
    //     height: 32,  // in inches
    //     width: 28,
    //     depth: 30
    // },
    // {
    //     id: 12,
    //     name: "Contemporary Metal Bar Stool",
    //     shortDescription: "Minimalist bar stool with a sleek design.",
    //     longDescription: "A durable metal bar stool with a modern design, perfect for kitchen counters or high-top tables. Comes with a footrest for added comfort.",
    //     price: 89.99,
    //     tags: ["chair"],
    //     quantity: 1,  // Quantity in the cart
    //     totalAvailable: 25,  // Total stock
    //     heroImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739151141/hero_ContemporaryMetalBarStool_hu1vhy.png",
    //     productImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739154254/product_ContemporaryMetalBarStool_s5gt1o.png",
    //     cartImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739153309/cart_ContemporaryMetalBarStool_cw0zz1.png",
    //     height: 30,  // in inches
    //     width: 16,
    //     depth: 16
    // },
    // {
    //     id: 13,
    //     name: "Classic Porcelain Dinner Plate Set (Set of 4)",
    //     shortDescription: "Elegant white dinner plates for any occasion.",
    //     longDescription: "A set of four high-quality porcelain plates with a smooth glaze, perfect for daily dining or formal events.",
    //     price: 49.99,
    //     tags: ["crockery"],
    //     quantity: 1,  // Quantity in the cart
    //     totalAvailable: 40,  // Total stock
    //     heroImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739151140/hero_ClassicPorcelainDinnerPlateSet_vyowov.png",
    //     productImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739154252/product_ClassicPorcelainDinnerPlateSet_iy5qss.png",
    //     cartImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739153308/cart_ClassicPorcelainDinnerPlateSet_sszqi2.png",
    //     height: 1,  // in inches
    //     width: 19,
    //     depth: 10
    // },
    // {
    //     id: 14,
    //     name: "Handmade Ceramic Soup Bowls (Set of 2)",
    //     shortDescription: "Artisan-crafted bowls with a rustic glaze.",
    //     longDescription: "Two deep ceramic bowls, ideal for soups, cereals, and pasta. Handmade and finished with a unique glaze.",
    //     price: 34.99,
    //     tags: ["crockery"],
    //     quantity: 1,  // Quantity in the cart
    //     totalAvailable: 30,  // Total stock
    //     heroImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739151145/hero_HandmadeCeramicSoupBowls_gsraug.png",
    //     productImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739154264/product_HandmadeCeramicSoupBowls_ql0h67.png",
    //     cartImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739153314/cart_HandmadeCeramicSoupBowls_yjm46f.png",
    //     height: 3.5,  // in inches
    //     width: 6.5,
    //     depth: 6.5
    // },
    // {
    //     id: 15,
    //     name: "Speckled Stoneware Serving Platter",
    //     shortDescription: "Stylish platter for serving meals and appetizers.",
    //     longDescription: "A long ceramic serving platter with a speckled matte finish, ideal for presenting meals beautifully.",
    //     price: 39.99,
    //     tags: ["crockery"],
    //     quantity: 1,  // Quantity in the cart
    //     totalAvailable: 20,  // Total stock
    //     heroImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739151135/hero_SpeckledStonewareServingPlatter_fr7mbb.png",
    //     productImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739154279/product_SpeckledStonewareServingPlatter_v3eyyh.png",
    //     cartImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739153322/cart_SpeckledStonewareServingPlatter_qzvfqr.png",
    //     height: 1.5,  // in inches
    //     width: 15,
    //     depth: 8
    // },
    // {
    //     id: 16,
    //     name: "Bamboo Wood Table Mat Set (Set of 6)",
    //     shortDescription: "Eco-friendly table mats with a natural look",
    //     longDescription: "A set of six handwoven bamboo mats, offering a stylish and sustainable way to protect your dining table.",
    //     price: 29.99,
    //     tags: ["tableware"],
    //     quantity: 1,  // Quantity in the cart
    //     totalAvailable: 35,  // Total stock
    //     heroImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739151130/hero_BambooWoodTableMatSet_cdaboa.png",
    //     productImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739154249/product_BambooWoodTableMatSet_hvit7o.png",
    //     cartImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739153307/cart_BambooWoodTableMatSet_agyq3g.png",
    //     height: 0.2,  // in inches
    //     width: 16,
    //     depth: 12
    // },
    // {
    //     id: 17,
    //     name: "Crystal Wine Glass Set (Set of 2)",
    //     shortDescription: "Elegant crystal glasses for fine dining.",
    //     longDescription: "Two premium lead-free crystal wine glasses, designed for a sophisticated drinking experience.",
    //     price: 49.99,
    //     tags: ["tableware"],
    //     quantity: 1,  // Quantity in the cart
    //     totalAvailable: 25,  // Total stock
    //     heroImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739151131/hero_CrystalWineGlassSet_ldem9g.png",
    //     productImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739154256/product_CrystalWineGlassSet_fbzv9p.png",
    //     cartImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739153311/cart_CrystalWineGlassSet_yhcgef.png",
    //     height: 9,  // in inches
    //     width: 3.5,
    //     depth: 3.5
    // },
    // {
    //     id: 18,
    //     name: "Linen Napkin Set (Set of 4)",
    //     shortDescription: "Soft linen napkins in neutral tones.",
    //     longDescription: "A set of four reusable linen napkins, perfect for everyday use or formal table settings.",
    //     price: 24.99,
    //     tags: ["tableware"],
    //     quantity: 1,  // Quantity in the cart
    //     totalAvailable: 50,  // Total stock
    //     heroImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739151134/hero_LinenNapkinSet_jgzcv2.png",
    //     productImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739154269/product_LinenNapkinSet_zqvrzu.png",
    //     cartImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739153316/cart_LinenNapkinSet_lyzmya.png",
    //     height: 0.1,  // in inches
    //     width: 18,
    //     depth: 18
    // },
    // {
    //     id: 19,
    //     name: "Stainless Steel Flatware Set (Set of 5)",
    //     shortDescription: "Elegant stainless steel flatware set for everyday use.",
    //     longDescription: "This set includes forks, knives, and spoons, all crafted from durable stainless steel with a sleek polished finish. Perfect for daily meals or casual entertaining.",
    //     price: 39.99,
    //     tags: ["cutlery"],
    //     quantity: 1,  // Quantity in the cart
    //     totalAvailable: 40,  // Total stock
    //     heroImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739151137/hero_StainlessSteelFlatwareSet_zaga9t.png",
    //     productImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739154282/product_StainlessSteelFlatwareSet_z0cjtg.png",
    //     cartImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739153323/cart_StainlessSteelFlatwareSet_gdz4jr.png",
    //     height: 1,  // in inches
    //     width: 8,
    //     depth: 2
    // },
    // {
    //     id: 20,
    //     name: "Gold-Plated Cutlery Set (Set of 4)",
    //     shortDescription: "Luxury gold-plated cutlery set, perfect for formal occasions.",
    //     longDescription: "This set includes a gold-plated dinner fork, knife, spoon, and dessert spoon, offering an elegant and shiny look to your table. Ideal for special events, parties, or luxury dining experiences.",
    //     price: 79.99,
    //     tags: ["cutlery"],
    //     quantity: 1,  // Quantity in the cart
    //     totalAvailable: 25,  // Total stock
    //     heroImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739151132/hero_GoldPlatedCutlerySet_djhpwv.png",
    //     productImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739154261/product_GoldPlatedCutlerySet_nfgeog.png",
    //     cartImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739153312/cart_GoldPlatedCutlerySet_ldmrhu.png",
    //     height: 1,  // in inches
    //     width: 9,
    //     depth: 2
    // },
    // {
    //     id: 21,
    //     name: "Wooden Handle Steak Knife Set (Set of 6)",
    //     shortDescription: "Sturdy steak knives with ergonomic wooden handles.",
    //     longDescription: "This set of six steak knives features sharp stainless steel blades and ergonomic wooden handles, making it perfect for cutting through meat with ease while adding a rustic touch to your dining.",
    //     price: 59.99,
    //     tags: ["cutlery"],
    //     quantity: 1,  // Quantity in the cart
    //     totalAvailable: 30,  // Total stock
    //     heroImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739151138/hero_WoodenHandleSteakKnifeSet_iufixz.png",
    //     productImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739154247/product_WoodenHandleSteakKnifeSet_vshr7x.png",
    //     cartImg: "https://res.cloudinary.com/drkhhutl3/image/upload/v1739153327/cart_WoodenHandleSteakKnifeSet_r8y2ys.png",
    //     height: 0.5,  // in inches
    //     width: 9,
    //     depth: 1
    // }    

]);

