export function getGameCover(image_id, big = true) {
    if (big) {
        return 'https://images.igdb.com/igdb/image/upload/t_cover_big/' + image_id + '.jpg';
    } else {
        return 'https://images.igdb.com/igdb/image/upload/t_cover_small/' + image_id + '.jpg';
    }
}