/*
 * 將要隨機派發的網址放入下方（不需排序）
 *
 * 並請注意：
 * 1. 除最後一項外，其餘項目用逗號分隔
 * 2. 網址請用引號包起來
 */


const urls = [
	'https://docs.google.com/forms/d/e/1FAIpQLScEIutwPxiFuleUB1iUR8akaO0hhe5TKAikSJzcwotveDuHdg/viewform?usp=share_link',
	'https://docs.google.com/forms/d/e/1FAIpQLSfsUeH16gWX_wQWrfBIb_SjTNE_7UaO7esgmtQuqu6YTOhaVw/viewform?usp=share_link',
	'https://docs.google.com/forms/d/e/1FAIpQLSdfzNp5MIBCafFcakRotLpi9xucH1ZfnxKhVFbAEUzPFLSmsw/viewform?usp=share_link',
	'https://docs.google.com/forms/d/e/1FAIpQLSfhjAdXuP9cXuiQ6ucV0BCN32g3FUPLi4teZ8LgvbLZ1u-cqQ/viewform?usp=share_link',
	'https://docs.google.com/forms/d/e/1FAIpQLSeG-BNgwE7hE4usx80gPAr_zXi8BfyLK46ROD1X5owIZakWgw/viewform?usp=share_link',
	'https://docs.google.com/forms/d/e/1FAIpQLScnz3qCtX0a6cL2mT2V9RVyD-SnArdI-9SiWR24s-6YVYEZyw/viewform?usp=share_link',
	'https://docs.google.com/forms/d/e/1FAIpQLSd6IBohgGnQqg4IVyxCFOZdze3X7PBMg1AlcDFRM2vgg3k4eA/viewform?usp=share_link',
	'https://docs.google.com/forms/d/e/1FAIpQLSeZ4MCGTYdnA_wmEv-wREmcfcl8_24AG0ce1woa1Clb9NpZhA/viewform?usp=share_link',
	'https://docs.google.com/forms/d/e/1FAIpQLSdbIObmAGofCyarDdyb4tY9uJiOslHvqoiX8xZY9GHVeITDjA/viewform?usp=share_link',
	'https://docs.google.com/forms/d/e/1FAIpQLSeVttCr08dSXmTJ0BeD-4niJdIY8kvUUA589eBAfhULJguWXA/viewform?usp=share_link',
	'https://docs.google.com/forms/d/e/1FAIpQLSdpAu7JSxWWV7hH41JwnWPbEO--Vi8eSnC5Gek1Tg-Cpy3RrQ/viewform?usp=share_link',
	'https://docs.google.com/forms/d/e/1FAIpQLSdtkrSDg95_kBb61YtIVklbEO7zHHYAPSx63kIKdzKF5ztO3Q/viewform?usp=share_link',
	'https://docs.google.com/forms/d/e/1FAIpQLScPv6U_PhRjKaB7-bJ5ZzF3BoapNAi7TummGqnXI4UgLzYEyg/viewform?usp=share_link',
	'https://docs.google.com/forms/d/e/1FAIpQLScRhwfcn4RVtOk85_XMBTj2M_YlLCeyFOZMnKftwIuCBKb1uw/viewform?usp=share_link',
	'https://docs.google.com/forms/d/e/1FAIpQLSclLEeGg2QHfqmBz18lVftxFWQt3HiyWQPuaMGJbdN1DuW1Kw/viewform?usp=share_link',
	'https://docs.google.com/forms/d/e/1FAIpQLSdfujm2SfORscAsM0UgGt2yLNzJEQf4EhuNb0_-yJFZoJHcgw/viewform?usp=share_link',
	'https://docs.google.com/forms/d/e/1FAIpQLSeh_1MlfcmNx0CbzoQChsmLWHLIXAQ5Lr61Ac79PM1YWKlVgA/viewform?usp=share_link',
	'https://docs.google.com/forms/d/e/1FAIpQLSeZ9k7TGX4aoRVtNGXEZ5iilrWvY564pqFPYFx0JFvVfFzRvA/viewform?usp=share_link',
	'https://docs.google.com/forms/d/e/1FAIpQLSe5IS5-pBvVVY0-hVuBZRpVa4FeP1uAUhgNsKcirgB7vkKrxg/viewform?usp=share_link',
	'https://docs.google.com/forms/d/e/1FAIpQLSdOn5_FN17RC-wZ1PUvZ3hxMdgdaM6IWNHflpjCDd53Y2GlLQ/viewform?usp=share_link'
];
