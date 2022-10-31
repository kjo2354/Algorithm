function solution(genres, plays) {
    const genreMap = new Map();

    genres
        .map((genre, index) => [genre, plays[index]])
        .forEach(([genre, play], index) => {
            const data = genreMap.get(genre) || { total: 0, songs: [] };
            genreMap.set(genre, {
                total: data.total + play,
                songs: [...data.songs, { play, index }]
                    .sort((a, b) => b.play - a.play)
                    .slice(0, 2)
            });
        });

    return [...genreMap.entries()]
        .sort((a, b) => b[1].total - a[1].total)
        .flatMap(item => item[1].songs)
        .map(song => song.index)
}
//return : [4, 1, 3, 0]
console.log(solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
))

/**
 * 베스트앨범
 *
 *
 */