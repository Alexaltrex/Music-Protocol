export const menu = [
    "-/GET",
    "NFTs",
    "REG",
    "USER",
    "ADDRESS",
]

export const orangeMobile = [
    [],
    [8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],
    [],
    [],
    [],
    [],
    [],
    [21,22,23,24,25,26,27,28,29,30],
    [],
    [],
    [],
    [],
    [],
    [0,1,2,3,4,5,6,7,8,9],
    [],
    [],

];

export const orangeDesktop = [
    [36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56],
    [],
    [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
    [],
    [],
    [21,22,23,24,25,26,27,28,29,30],
    [],
    [],
    [29,30,31,32,33,34,35,36,37,38],
    [],
    [],
    [],
    [],
    [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    [],
]

export const stringsMobile = [
    "#[pallet::config] pub trait",
    "Config: frame_system::Config { ",
    "type Event: From<Event<Self>>",
    "IsType <<Self asframe_system",
    "::Config>::Event>; }",

    "#[pallet::storage] #[pallet::",
    "getter(fn ip_cores)] pub type",
    "IPCores<T: Config> = StorageMap",
    "<_, Blake2_128Concat, T::Hash, ",
    "IPCore<T>, OptionQuery>;",

    "#[pallet::storage] #[pallet::",
    "getter(fn, attributes)] pub type",
    "Attributes<T: Config> = ",
    "StorageMap<_, Blake2_128Concat,",
    " T::Hash, Attribute<T>,",
    " OptionQuery>;",
    ]

export const stringsDesktop = [
    "#[pallet::config] pub trait Config: frame_system::Config {",
    "type Event: From<Event<Self>> + IsType<<Self as",
    "frame_system::Config>::Event>;",
    "}",

    "#[pallet::storage] #[pallet::getter(fn ip_cores)] pub type",
    "IPCores<T: Config> = StorageMap<_, Blake2_128Concat,",
    "T::Hash, IPCore<T>, OptionQuery>;",

    "#[pallet::storage] #[pallet::getter(fn attributes)] pub",
    "type Attributes<T: Config> = StorageMap<_,",
    "Blake2_128Concat, T::Hash, Attribute<T>, OptionQuery>;",

    "#[pallet::event] #[pallet::generate_deposit(pub(super)",
    "fn deposit_event)] pub enum Event<T: Config> {",
    "IPCoreCreated(T::Hash),",

    "AttributeCreated(T::Hash);",
    "}"
]