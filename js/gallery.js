const images = [
    {
        preview: 'https://s3-alpha-sig.figma.com/img/5dde/4622/0907ed8fd691000bbe73fee51101d8ee?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BWXa5sf-HRjp13TtXRMNvAFIysHl4nSLYIC9B1cQFh6RWe015GDLTMz0w5bj-nYg6DbDQpStlHLrqubrujoW4Tq2EXhTLUat4f49hKIeT9IUh5Svz-GhHkudIVJtwmbl3wCJ8FQVJe666oNT6cD3tS2LnCa~2Eil3BVwxZZWihdBTA9iY2EXab6PDXsALU3ciCMv39C9AnBl8tiy6Jpw1vIlQrWNB-0WfxJ~DiM2MiXxHoAH9WoO4W3FvQ2eY3CzW9It~0OOBmxZrct-Lsj--K50Hv9pJM8veNqM6iTHrpQuEZoigeIFRZZf6VGye3oteHHQA5~C7PhHxZ3kqWc34Q__',
        original: 'https://s3-alpha-sig.figma.com/img/5dde/4622/0907ed8fd691000bbe73fee51101d8ee?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BWXa5sf-HRjp13TtXRMNvAFIysHl4nSLYIC9B1cQFh6RWe015GDLTMz0w5bj-nYg6DbDQpStlHLrqubrujoW4Tq2EXhTLUat4f49hKIeT9IUh5Svz-GhHkudIVJtwmbl3wCJ8FQVJe666oNT6cD3tS2LnCa~2Eil3BVwxZZWihdBTA9iY2EXab6PDXsALU3ciCMv39C9AnBl8tiy6Jpw1vIlQrWNB-0WfxJ~DiM2MiXxHoAH9WoO4W3FvQ2eY3CzW9It~0OOBmxZrct-Lsj--K50Hv9pJM8veNqM6iTHrpQuEZoigeIFRZZf6VGye3oteHHQA5~C7PhHxZ3kqWc34Q__',
        description: 'Опис зображення 1'
    },
    {
        preview: 'https://s3-alpha-sig.figma.com/img/390f/d68d/955549ff429e815e5e2bade820721376?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y0S6gz6lshvVmKfRtVYZhnQWd6JISooUNd-aWpSe7B6vGU0EFihC7tkZGLyPgalhMim827ge-9qSXlKrGY9k7bWbK~SM9CLxQ~stME-WVBvSblIV6leOZvej5jDmec~ujjx21Y1SdsgWTfEPuFuQmkf7T3YXjVgESXcqazbKoSC~KPbnBQGHU1XGISfvUPVZV2lzkzl7539G18JA59qhDeQSvIR8AQC-ibKUhpQExdotsZRjoPoSgf~GfT9tY3JSS1LK96fHWFCS8AW3SkSDKVdW9R-IpSoVVFVqbipx~4I5OIi3~8eoPQEYbLs5cs4EgFWD4vHCJsFzui~zn5nl2g__',
        original: 'https://s3-alpha-sig.figma.com/img/390f/d68d/955549ff429e815e5e2bade820721376?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y0S6gz6lshvVmKfRtVYZhnQWd6JISooUNd-aWpSe7B6vGU0EFihC7tkZGLyPgalhMim827ge-9qSXlKrGY9k7bWbK~SM9CLxQ~stME-WVBvSblIV6leOZvej5jDmec~ujjx21Y1SdsgWTfEPuFuQmkf7T3YXjVgESXcqazbKoSC~KPbnBQGHU1XGISfvUPVZV2lzkzl7539G18JA59qhDeQSvIR8AQC-ibKUhpQExdotsZRjoPoSgf~GfT9tY3JSS1LK96fHWFCS8AW3SkSDKVdW9R-IpSoVVFVqbipx~4I5OIi3~8eoPQEYbLs5cs4EgFWD4vHCJsFzui~zn5nl2g__',
        description: 'Опис зображення 2'
    },
    {
        preview: 'https://s3-alpha-sig.figma.com/img/48be/88f7/1998c160dc2be34a63b3f2183392ff8b?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U3lNKlHtPKrt7qSmPhCsoTU2-AE20DK6Xu16~yUSo3cgCs6-p5~1gebUgTnQ4qL9S7m0y4WEjjTlmeijrOGyVy7-2-cTK-jdctOAA~e4mth0jadq9t374P~G02R~72vB9E6ykBtNY6aVvVLDaH0XgoEI7skQnyZqJlv-R4uznxLTbbuI5EmdQgfX5~XQ-rMTSU-OdzmCN0I1q7H4K4yhcZgtit6k3hbcCqoFyc7fzXHImOSsWPSDGOitdB2aV7AJlisEfI0R0Eiqvj9jQ0NFFz~faI-3NEbYTgOm~IfTRVSbR9bQOG1l27~ognlwswjAY0soA4UWLp23YMEng9~7UQ__',
        original: 'https://s3-alpha-sig.figma.com/img/48be/88f7/1998c160dc2be34a63b3f2183392ff8b?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U3lNKlHtPKrt7qSmPhCsoTU2-AE20DK6Xu16~yUSo3cgCs6-p5~1gebUgTnQ4qL9S7m0y4WEjjTlmeijrOGyVy7-2-cTK-jdctOAA~e4mth0jadq9t374P~G02R~72vB9E6ykBtNY6aVvVLDaH0XgoEI7skQnyZqJlv-R4uznxLTbbuI5EmdQgfX5~XQ-rMTSU-OdzmCN0I1q7H4K4yhcZgtit6k3hbcCqoFyc7fzXHImOSsWPSDGOitdB2aV7AJlisEfI0R0Eiqvj9jQ0NFFz~faI-3NEbYTgOm~IfTRVSbR9bQOG1l27~ognlwswjAY0soA4UWLp23YMEng9~7UQ__',
        description: 'Опис зображення 3'
    },
    {
        preview: 'https://s3-alpha-sig.figma.com/img/7391/477d/e6356a31941e3cc31c991e67894bb945?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nF1xR9D-eBBE0os2aXRYghN58geNJAKHNCg~7XQZo2zBiMQwaMoQn0vrZ9ZD6Wu-XUl5EPCv~kti7psfzGM8QeWDPi1BSD16FAi44KoFdai5zPtHaZ~3WsbRiQNp5NzKFl3UGR3crugzosl2WY1YNKDe4~7IL0i8jYHj3il8u9aouuJquJcc919gUByekclh2BtxXG2edRQlOYGySPZBOzLTRgA2MIjrUcOPCv9-QDkqsMEQzTAkR80Nw4Fjl0w4ILAtdR2zdHOQ8lu0daHrZUrXRehb4YWv1S91P5iwtHxzpkiGetsw6m1Yh3dZuWT-DkA4-fyGl~7DrmCaCCqRtA__',
        original: 'https://s3-alpha-sig.figma.com/img/7391/477d/e6356a31941e3cc31c991e67894bb945?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nF1xR9D-eBBE0os2aXRYghN58geNJAKHNCg~7XQZo2zBiMQwaMoQn0vrZ9ZD6Wu-XUl5EPCv~kti7psfzGM8QeWDPi1BSD16FAi44KoFdai5zPtHaZ~3WsbRiQNp5NzKFl3UGR3crugzosl2WY1YNKDe4~7IL0i8jYHj3il8u9aouuJquJcc919gUByekclh2BtxXG2edRQlOYGySPZBOzLTRgA2MIjrUcOPCv9-QDkqsMEQzTAkR80Nw4Fjl0w4ILAtdR2zdHOQ8lu0daHrZUrXRehb4YWv1S91P5iwtHxzpkiGetsw6m1Yh3dZuWT-DkA4-fyGl~7DrmCaCCqRtA__',
        description: 'Опис зображення 4'
    },
    {
        preview: 'https://s3-alpha-sig.figma.com/img/c9a7/04d1/391760494c3ad88cab833c525eb33d6c?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=adTLSSK~b8bOh2sJl4~5X20nr6zieKTz~izqYsD4WOQs9H5ge4YT8h4h5BZsmJWxtdhsTwdNT6QCJxejW9lIXzTagtnKlxESTUkf7SgPc3hSrKNqR9mncSq2pkvI6IwOpPWPXl86mpwu-BWUlGuoU~oVg2X708zs-TU3pG5RwDVwq04kJpQbuLSGMURzg2t0rD5hPieOJOVoY9Yukqk5Nk8QiwfrFH7tCznwUf7K2vha6P91Wb~D6Jz5NBS2HGHRMUzLxuA44wOQ8cx1W6lrVXLpXw01Fi04gu0Zn~KpPuRkSf1vrDl-Q9karbVEBTNE0p0HQ6JMD8xmy6XQ6jJPDA__',
        original: 'https://s3-alpha-sig.figma.com/img/c9a7/04d1/391760494c3ad88cab833c525eb33d6c?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=adTLSSK~b8bOh2sJl4~5X20nr6zieKTz~izqYsD4WOQs9H5ge4YT8h4h5BZsmJWxtdhsTwdNT6QCJxejW9lIXzTagtnKlxESTUkf7SgPc3hSrKNqR9mncSq2pkvI6IwOpPWPXl86mpwu-BWUlGuoU~oVg2X708zs-TU3pG5RwDVwq04kJpQbuLSGMURzg2t0rD5hPieOJOVoY9Yukqk5Nk8QiwfrFH7tCznwUf7K2vha6P91Wb~D6Jz5NBS2HGHRMUzLxuA44wOQ8cx1W6lrVXLpXw01Fi04gu0Zn~KpPuRkSf1vrDl-Q9karbVEBTNE0p0HQ6JMD8xmy6XQ6jJPDA__',
        description: 'Опис зображення 5'
    },
    {
        preview: 'https://s3-alpha-sig.figma.com/img/2bab/8cd4/1bcc5a2255da522ea2a79402020a7d5d?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pzgY9AgTR20qruxzNrtScAfQiDdmy0KX7obkJVsHVni7gd4JGgAHnCr2yJzBPlfNG0o8FwHxLJW1ska9j4PGBAVifK89PHqVaLJ51QZPV3pdET5Pvog0OJAwARCBVDCrVHMUIl3W1ZAtZCGMXV-AAdv05pOkJ4DljUXclmREm8bXdtOGIxgi7V7q~6wfVqdGGdbZuJ67LeFq8bnqaZC-GnkQE5D4mx0tYiB4eoNW4kkVg~0KUv3NVXzrkvBpJpnX2WSTPKIpXFHSLZVAUsgCqCMaUmjhJjhgzlo9lJWgZZkGJZZ8fEYg87Mp6AjFPqIMxjFaloWz~Vpd3xlvGPpnmw__',
        original: 'https://s3-alpha-sig.figma.com/img/2bab/8cd4/1bcc5a2255da522ea2a79402020a7d5d?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pzgY9AgTR20qruxzNrtScAfQiDdmy0KX7obkJVsHVni7gd4JGgAHnCr2yJzBPlfNG0o8FwHxLJW1ska9j4PGBAVifK89PHqVaLJ51QZPV3pdET5Pvog0OJAwARCBVDCrVHMUIl3W1ZAtZCGMXV-AAdv05pOkJ4DljUXclmREm8bXdtOGIxgi7V7q~6wfVqdGGdbZuJ67LeFq8bnqaZC-GnkQE5D4mx0tYiB4eoNW4kkVg~0KUv3NVXzrkvBpJpnX2WSTPKIpXFHSLZVAUsgCqCMaUmjhJjhgzlo9lJWgZZkGJZZ8fEYg87Mp6AjFPqIMxjFaloWz~Vpd3xlvGPpnmw__',
        description: 'Опис зображення 6'
    },
    {
        preview: 'https://s3-alpha-sig.figma.com/img/0b5d/6f97/8746606f5644ab8bf836a19e68bd8246?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GZF7QSdMQZjDxsejLbSl3q4WwgBux4INlMFmf53GUjy7PDYt~IOB7ndOLHYNzKRXm9~7E7b9Wb70HdQu0yTErK809xrbwOIm6B087Abgu-zZsYW5aP0IY6Tu3XLpRSI84QBXapVwKWrXD2B44zWFpE1fIZBjmFZXmMb3389hozeX9g9JRpBU-64YJqy0h6rXa-UVkL5DatAKRt~LqQ1hiH0eUeRz18vONPDRyIsXiGL3sUxFxUoMTDTRDUJv7nFCJ2u2GEN9gxCDLiJRYJmxMc9APRcv2E5fVaoUI5XStozsVny3a8umkCNZRWa5JnQc0hB4SGO~bmjBHpZ--5e89w__',
        original: 'https://s3-alpha-sig.figma.com/img/0b5d/6f97/8746606f5644ab8bf836a19e68bd8246?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GZF7QSdMQZjDxsejLbSl3q4WwgBux4INlMFmf53GUjy7PDYt~IOB7ndOLHYNzKRXm9~7E7b9Wb70HdQu0yTErK809xrbwOIm6B087Abgu-zZsYW5aP0IY6Tu3XLpRSI84QBXapVwKWrXD2B44zWFpE1fIZBjmFZXmMb3389hozeX9g9JRpBU-64YJqy0h6rXa-UVkL5DatAKRt~LqQ1hiH0eUeRz18vONPDRyIsXiGL3sUxFxUoMTDTRDUJv7nFCJ2u2GEN9gxCDLiJRYJmxMc9APRcv2E5fVaoUI5XStozsVny3a8umkCNZRWa5JnQc0hB4SGO~bmjBHpZ--5e89w__',
        description: 'Опис зображення 7'
    },
    {
        preview: 'https://s3-alpha-sig.figma.com/img/b7c3/63e3/3c57d745a2bada38125746fc6ec0d9cc?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lkPD7iLzRPmspuenVgooheAPzTMsBQOKRHdfRuI61e0hfML5cltxjrOEYYU4qBc0FbP~kjZc8a1bc7D3OA5t950p1QusQ1nxYKqRrEf5P-iT0FdX7kW7KyOhWNgi1ekZ~~0kB9dF3v9kYL3rJXPAsmkdoTZEGnX49WeOsEO-egJym3XmVgxwnfBXBcvzwTFZhYjk2mNhxwXWKmGSdRhkgf7LP7SqNwe1R8jWsAuVnbRIWkGC5nffxosHeTwjL~95b-sBUjmpBtcCjpHK~8bkgIQxthcvrOrr~MI-buiVQenP1wkGdE7XFkHHxMqABpF6L-VEotcGjNHbV-VUz5CYlA__',
        original: 'https://s3-alpha-sig.figma.com/img/b7c3/63e3/3c57d745a2bada38125746fc6ec0d9cc?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lkPD7iLzRPmspuenVgooheAPzTMsBQOKRHdfRuI61e0hfML5cltxjrOEYYU4qBc0FbP~kjZc8a1bc7D3OA5t950p1QusQ1nxYKqRrEf5P-iT0FdX7kW7KyOhWNgi1ekZ~~0kB9dF3v9kYL3rJXPAsmkdoTZEGnX49WeOsEO-egJym3XmVgxwnfBXBcvzwTFZhYjk2mNhxwXWKmGSdRhkgf7LP7SqNwe1R8jWsAuVnbRIWkGC5nffxosHeTwjL~95b-sBUjmpBtcCjpHK~8bkgIQxthcvrOrr~MI-buiVQenP1wkGdE7XFkHHxMqABpF6L-VEotcGjNHbV-VUz5CYlA__',
        description: 'Опис зображення 8'
    },
    {
        preview: 'https://s3-alpha-sig.figma.com/img/3976/96b0/ca2f409c0e028c22bc862fa002981112?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aYHHDVOKVlSNojZaQpXXiA7cFgbKhip9WDUSbMN7Q5U1xnp-wsY1L33QuEi9NQK7MN-QLow0uiMf2Ajn9oTsMbJOywUeWs~5qDyEmqwVMvnH8lZUXU0DWHn7pXa-ivDO0fgEm2YJek7shAXMFFiQJ-nQj00Dk47C6LUoC99hI7LLs3wqYBmWd8~sUYKwqHLozBNRESfibMw71Xuh4zr0um29T9IjqfcnQIPIgFmzEw9im7qojCy8HPbhNINtwQyAKGBpgraDppB4gfqZSFkFFP0YkkU7Hg-moCGj7F8KJvK3AgcDb78JGIhixj0xp306aGTLRv9DhvxcrMjlUicyKA__',
        original: 'https://s3-alpha-sig.figma.com/img/3976/96b0/ca2f409c0e028c22bc862fa002981112?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aYHHDVOKVlSNojZaQpXXiA7cFgbKhip9WDUSbMN7Q5U1xnp-wsY1L33QuEi9NQK7MN-QLow0uiMf2Ajn9oTsMbJOywUeWs~5qDyEmqwVMvnH8lZUXU0DWHn7pXa-ivDO0fgEm2YJek7shAXMFFiQJ-nQj00Dk47C6LUoC99hI7LLs3wqYBmWd8~sUYKwqHLozBNRESfibMw71Xuh4zr0um29T9IjqfcnQIPIgFmzEw9im7qojCy8HPbhNINtwQyAKGBpgraDppB4gfqZSFkFFP0YkkU7Hg-moCGj7F8KJvK3AgcDb78JGIhixj0xp306aGTLRv9DhvxcrMjlUicyKA__',
        description: 'Опис зображення 9'
    },
];

const gallery = document.querySelector('.gallery');

const galleryMarkup = images.map(({ preview, original, description }) => {
    return `
        <li>
            <img src="${preview}" data-source="${original}" alt="${description}">
        </li>
    `;
}).join('');

gallery.innerHTML = galleryMarkup;

gallery.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') return;

    const originalImageSrc = event.target.dataset.source;

    console.log(originalImageSrc);

    const instance = basicLightbox.create(`
        <img src="${originalImageSrc}" alt="${event.target.alt}">
    `);

    instance.show();
});
