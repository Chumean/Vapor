from app.models import db, Game, environment, SCHEMA
from sqlalchemy.sql import text

def seed_games():
    p5r = Game(
        title='Persona 5 Royal',
        genre='RPG',
        developer="ATLUS",
        publisher="SEGA",
        franchise='Persona',
        release_date='Oct 21, 2022',
        description='Prepare for the award-winning RPG experience in this definitive edition of Persona 5 Royal.',
        price=59.99,
        tags='Anime',
        image='https://res.cloudinary.com/dsu4khzr3/image/upload/v1685589376/656e8c37-8260-4bfc-82d0-e16650dd147c_pz6oed.jpg'
    )

    nier = Game(
        title='NieR: Automata',
        genre='Action',
        developer='PlatinumGames',
        publisher='Square Enix',
        franchise='NieR',
        release_date='Mar 17, 2017',
        description='Experience the critically acclaimed action RPG, NieR: Automata, and uncover the truth behind a dystopian world.',
        price=39.99,
        tags='Sci-Fi',
        image='https://res.cloudinary.com/dsu4khzr3/image/upload/v1685589599/Nier_Automata_cover_art_gvh6ty.jpg'
    )

    ggst = Game(
        title='Guilty Gear Strive',
        genre='Fighting',
        developer='Arc System Works',
        publisher='Arc System Works',
        franchise='Guilty Gear',
        release_date='Jun 11, 2021',
        description='Immerse yourself in the visually stunning world of Guilty Gear Strive and engage in intense battles with a diverse roster of characters.',
        price=59.99,
        tags='2D Fighter',
        image='https://res.cloudinary.com/dsu4khzr3/image/upload/v1685590315/guilty-gear-strive-1617935028610_iwvoxl.jpg'
    )

    bdo = Game(
    title='Black Desert',
    genre='RPG',
    developer='Pearl Abyss',
    publisher='Pearl Abyss',
    franchise="Black Desert",
    release_date='Mar 3, 2016',
    description='Embark on a vast open-world adventure in Black Desert and engage in action-packed combat, immersive storylines, and endless exploration.',
    price=29.99,
    tags='Fantasy',
    image='https://res.cloudinary.com/dsu4khzr3/image/upload/v1685590357/A1fnUEYCOeL._SX540__duwyne.jpg'
    )

    unist = Game(
    title='Under Night In-Birth Exe:Late[st]',
    genre='Fighting',
    developer='French-Bread',
    publisher='Arc System Works',
    franchise='Under Night In-Birth',
    release_date='Aug 20, 2017',
    description='Enter the dark and mysterious world of Under Night In-Birth Exe:Late[st], a highly regarded fighting game with a unique cast of characters and a deep combat system.',
    price=29.99,
    tags='Anime Fighter',
    image='https://res.cloudinary.com/dsu4khzr3/image/upload/v1685590390/capsule_616x353_nxqqtx.jpg'
    )

    mbtl = Game(
    title='Melty Blood: Type Lumina',
    genre='Fighting',
    developer='French-Bread',
    publisher='Arc System Works',
    franchise='Melty Blood',
    release_date='Sep 30, 2021',
    description='Experience the latest installment in the Melty Blood series with Melty Blood: Type Lumina, featuring fast-paced combat, intricate mechanics, and a diverse roster of characters.',
    price=49.99,
    tags='Anime Fighter',
    image='https://res.cloudinary.com/dsu4khzr3/image/upload/v1686451631/ba3344f015a771b537396f323a035e8f29c13835a517c6ecf01992f91a8a81e9_vre4tt.avif'
    )

    dd = Game(
    title='Darkest Dungeon',
    genre='Roguelike',
    developer='Red Hook Studios',
    publisher='Red Hook Studios',
    franchise='Darkest Dungeon',
    release_date='Jan 19, 2016',
    description='Descend into the depths of madness and face eldritch horrors in Darkest Dungeon, a challenging and atmospheric roguelike RPG with strategic turn-based combat.',
    price=24.99,
    tags='Lovecraftian, Gothic',
    image='https://res.cloudinary.com/dsu4khzr3/image/upload/v1685590451/Darkest-Dungeon_le1rlw.jpg'
    )

    hades = Game(
    title='Hades',
    genre='Roguelike',
    developer='Supergiant Games',
    publisher='Supergiant Games',
    franchise="Hades",
    release_date='Sep 17, 2020',
    description='Venture into the underworld and defy the god of death in Hades, an action-packed roguelike game with stunning visuals, engaging combat, and a captivating story.',
    price=24.99,
    tags='Greek Mythology, Indie',
    image='https://res.cloudinary.com/dsu4khzr3/image/upload/v1685590492/header_atue4i.jpg'
    )

    dmc5 = Game(
    title='Devil May Cry 5',
    genre='Hack and Slash',
    developer='Capcom',
    publisher='Capcom',
    franchise='Devil May Cry',
    release_date='Mar 8, 2019',
    description='Unleash stylish and over-the-top demon-slaying action in Devil May Cry 5, the latest installment of the renowned hack and slash franchise. Join Dante, Nero, and new protagonist V as they battle against hordes of supernatural enemies in a visually stunning world.',
    price=39.99,
    tags='Stylish Action, Demons',
    image='https://res.cloudinary.com/dsu4khzr3/image/upload/v1685590513/capsule_616x353_fxey7m.jpg'
    )

    bayonetta = Game(
    title='Bayonetta',
    genre='Hack and Slash',
    developer='PlatinumGames',
    publisher='Sega',
    franchise='Bayonetta',
    release_date='Jan 29, 2010',
    description='Experience the exhilarating and stylish combat of Bayonetta, an action-packed hack and slash game featuring a powerful witch battling against angelic forces.',
    price=19.99,
    tags='Witch, Fantasy',
    image='https://res.cloudinary.com/dsu4khzr3/image/upload/v1685590544/5e8029ad4b352792683f9ea226ce145329cacfee11c72bb94fe7d5a91d7cc7ac_noevee.avif'
    )

    cp2077 = Game(
    title='Cyberpunk 2077',
    genre='RPG',
    developer='CD Projekt Red',
    publisher='CD Projekt',
    franchise='Cyberpunk 2077',
    release_date='Dec 10, 2020',
    description='Immerse yourself in the dystopian future of Night City in Cyberpunk 2077, an action-packed RPG set in a sprawling open world. Customize your character, make choices that shape the story, and navigate the dangerous streets filled with corporate intrigue and technological advancements.',
    price=59.99,
    tags='Cyberpunk, Open World',
    image='https://res.cloudinary.com/dsu4khzr3/image/upload/v1685590565/download_xsdag0.jpg'
    )


    witcher = Game(
    title='The Witcher 3: Wild Hunt',
    genre='RPG',
    developer='CD Projekt Red',
    publisher='CD Projekt',
    franchise='The Witcher',
    release_date='May 19, 2015',
    description='Embark on an epic journey as Geralt of Rivia in the open-world fantasy RPG, The Witcher 3: Wild Hunt.',
    price=29.99,
    tags='Fantasy, Adventure',
    image='https://res.cloudinary.com/dsu4khzr3/image/upload/v1686429223/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f_rcxrtm.jpg'
)

    rdr2 = Game(
    title='Red Dead Redemption 2',
    genre='Adventure',
    developer='Rockstar Games',
    publisher='Rockstar Games',
    franchise='Red Dead',
    release_date='Oct 26, 2018',
    description='Experience the vast and immersive world of the Wild West in Red Dead Redemption 2.',
    price=59.99,
    tags='Western, Open World',
    image='https://res.cloudinary.com/dsu4khzr3/image/upload/v1686429247/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec_eb1orn.jpg'
)

    botw = Game(
    title='The Legend of Zelda: Breath of the Wild',
    genre='Adventure',
    developer='Nintendo',
    publisher='Nintendo',
    franchise='The Legend of Zelda',
    release_date='Mar 3, 2017',
    description='Embark on a grand adventure in the kingdom of Hyrule in The Legend of Zelda: Breath of the Wild.',
    price=59.99,
    tags='Fantasy, Exploration',
    image='https://res.cloudinary.com/dsu4khzr3/image/upload/v1686429279/BOTW-Share_icon_oobjeb.jpg'
)


    gta5 = Game(
    title='Grand Theft Auto V',
    genre='Adventure',
    developer='Rockstar North',
    publisher='Rockstar Games',
    franchise='Grand Theft Auto',
    release_date='Sep 17, 2013',
    description='Enter the sprawling open world of Los Santos in Grand Theft Auto V and engage in various criminal activities.',
    price=29.99,
    tags='Open World, Crime',
    image='https://res.cloudinary.com/dsu4khzr3/image/upload/v1686429323/gta-5-vr-mod_wvkquo.jpg'
)

    minecraft = Game(
    title='Minecraft',
    genre='Sandbox',
    developer='Mojang Studios',
    publisher='Mojang Studios',
    franchise="Minecraft",
    release_date='Nov 18, 2011',
    description='Unleash your creativity and survive in the blocky world of Minecraft.',
    price=26.95,
    tags='Open World, Building',
    image='https://res.cloudinary.com/dsu4khzr3/image/upload/v1686429358/Minecraft_PC_Bundle_XboxClub_1920x1080_y0kwyw.webp'
)

    skyrim = Game(
    title='The Elder Scrolls V: Skyrim',
    genre='RPG',
    developer='Bethesda Game Studios',
    publisher='Bethesda Softworks',
    franchise='The Elder Scrolls',
    release_date='Nov 11, 2011',
    description='Embark on an epic adventure in the vast and immersive world of Skyrim.',
    price=39.99,
    tags='Fantasy, Open World',
    image='https://res.cloudinary.com/dsu4khzr3/image/upload/v1686429422/hero_jdmvel.avif'
)

    ow = Game(
    title='Overwatch',
    genre='FPS',
    developer='Blizzard Entertainment',
    publisher='Blizzard Entertainment',
    franchise="Overwatch",
    release_date='May 24, 2016',
    description='Join the team-based multiplayer mayhem in Overwatch and showcase your skills.',
    price=19.99,
    tags='Multiplayer, FPS',
    image='https://res.cloudinary.com/dsu4khzr3/image/upload/v1686429471/overwatchmain_vt28ld.webp'
)

    fortnite = Game(
    title='Fortnite',
    genre='Battle Royale',
    developer='Epic Games',
    publisher='Epic Games',
    franchise="Fortnite",
    release_date='Jul 25, 2017',
    description='Jump into the battle royale phenomenon and compete against players worldwide in Fortnite.',
    price=0.01,
    tags='Multiplayer, Free-to-play',
    image='https://res.cloudinary.com/dsu4khzr3/image/upload/v1686429557/fortnite-home-page-battle-pass-promo-slide-desktop-1920x1080-8d9444dcb067_zuhamq.jpg'
)

    mario = Game(
    title='Super Mario Odyssey',
    genre='Platformer',
    developer='Nintendo',
    publisher='Nintendo',
    franchise='Super Mario',
    release_date='Oct 27, 2017',
    description='Join Mario on a globe-trotting adventure to rescue Princess Peach in Super Mario Odyssey.',
    price=59.99,
    tags='Platform, Adventure',
    image='https://res.cloudinary.com/dsu4khzr3/image/upload/v1686429523/c42553b4fd0312c31e70ec7468c6c9bccd739f340152925b9600631f2d29f8b5_majmso.avif'
    )

    cod = Game(
    title='Call of Duty: Modern Warfare',
    genre='FPS',
    developer='Infinity Ward',
    publisher='Activision',
    franchise='Call of Duty',
    release_date='Oct 25, 2019',
    description='Engage in intense multiplayer combat and a gripping single-player campaign in Call of Duty: Modern Warfare.',
    price=59.99,
    tags='Multiplayer, FPS',
    image='https://res.cloudinary.com/dsu4khzr3/image/upload/v1686429645/maxresdefault_vbpumu.jpg'
    )


    db.session.add(p5r)
    db.session.add(nier)
    db.session.add(ggst)
    db.session.add(bdo)
    db.session.add(unist)
    db.session.add(mbtl)
    db.session.add(dd)
    db.session.add(hades)
    db.session.add(dmc5)
    db.session.add(bayonetta)
    db.session.add(cp2077)
    db.session.add(witcher)
    db.session.add(rdr2)
    db.session.add(botw)
    db.session.add(gta5)
    db.session.add(minecraft)
    db.session.add(skyrim)
    db.session.add(ow)
    db.session.add(fortnite)
    db.session.add(mario)
    db.session.add(cod)
    db.session.commit()

def undo_games():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.games RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM games"))

    db.session.commit()
