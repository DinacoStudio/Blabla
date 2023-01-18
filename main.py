import asyncio

from aiobalaboba import Balaboba


async def main():
    bb = Balaboba()
    intros = await bb.get_text_types(language="en")
    response = await bb.balaboba("Hello", 0)
    print(response)

asyncio.run(main())