// 1. Bun automatically loads .env
const TMDB_TOKEN = process.env.TMDB_API_KEY;

// 2. Map the CLI arguments to the actual TMDB API endpoints
const ENDPOINTS: Record<string, string> = {
  playing: '/3/movie/now_playing',
  popular: '/3/movie/popular',
  top: '/3/movie/top_rated',
  upcoming: '/3/movie/upcoming'
};

// 3. Helper to parse the --type argument from the terminal
function getMovieType(): string | null {
  const args = process.argv.slice(2); // Gets everything after 'bun run index.ts'
  const typeIndex = args.indexOf('--type');
  
  if (typeIndex !== -1 && args[typeIndex + 1]) {
    return args[typeIndex + 1].toLowerCase(); // Normalize to lowercase
  }
  return null;
}

async function main() {
  // --- VALIDATION ---
  if (!TMDB_TOKEN) {
    console.error('❌ Error: TMDB_BEARER_TOKEN is missing from your .env file!');
    process.exit(1);
  }

  const movieType = getMovieType();

  // Check if the user provided a valid type
  if (!movieType || !ENDPOINTS[movieType]) {
    console.error('❌ Invalid or missing --type argument.');
    console.log('\n📖 Usage:');
    console.log('   bun dev --type "playing"  (Now Playing)');
    console.log('   bun dev --type "popular"  (Popular)');
    console.log('   bun dev --type "top"      (Top Rated)');
    console.log('   bun dev --type "upcoming" (Upcoming)\n');
    process.exit(1);
  }

  // --- FETCHING DATA ---
  const endpointPath = ENDPOINTS[movieType];
  const url = `https://api.themoviedb.org${endpointPath}?language=en-US&page=1`;
  
  console.log(`\n🎬 Fetching "${movieType.toUpperCase()}" movies from TMDB...\n`);

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${TMDB_TOKEN}`
      }
    });

    if (!response.ok) {
      throw new Error(`TMDB API returned status ${response.status}`);
    }

    const data = await response.json();

    // --- FORMATTING OUTPUT ---
    // Map the raw API data into a clean array of objects for console.table
    const movieTable = data.results.map((movie: any) => ({
      ID: movie.id,
      Title: movie.title,
      'Release Date': movie.release_date || 'TBA', // Fallback for upcoming movies without dates
      'Rating': movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A',
      'Popularity': movie.popularity.toFixed(0)
    }));

    // Print a beautiful table in the terminal
    console.table(movieTable);
    
    console.log(`\n✅ Successfully fetched ${data.results.length} movies (Page ${data.page} of ${data.total_pages}).\n`);

  } catch (error) {
    console.error('❌ Failed to fetch movie data:', error);
    process.exit(1);
  }
}

// Execute the CLI
main();
