import Head from 'next/head';
import React from 'react';

import Breadcrumb from '../../components/Breadcrumb';
import Breadcrumbs from '../../components/Breadcrumbs';
import ListingCard from '../../components/ListingCard';

const Listings = ({ listings, search }) => {
  return (
    <>
      <Head>
        <title> Browsing Listings | auctionweb.site</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <div className="animate-fade-in-up">
        <Breadcrumbs>
          <Breadcrumb link="/" name="Home" />
          <Breadcrumb link="/listings" name="Browse Listings" />
        </Breadcrumbs>
        
        <section className="glass-card" style={{
          marginTop: '1.5rem',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          <h1 className="heading-2" style={{ marginBottom: '0.5rem' }}>
            {!search ? 'All Listings' : `Search Results for "${search}"`}
          </h1>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.125rem'
          }}>
            {listings.length
              ? `Showing ${listings.length} ${listings.length === 1 ? 'listing' : 'listings'}`
              : 'No listings found'}
          </p>
        </section>

        <div className="grid-responsive" style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.5rem',
          padding: '1rem 0'
        }}>
          {listings.map((listing, idx) => (
            <ListingCard
              key={idx}
              name={listing.title}
              expiresAt={listing.expiresAt}
              price={listing.currentPrice}
              smallImage={listing.smallImage}
              slug={`/listings/${listing.slug}`}
            />
          ))}
        </div>

        {listings.length === 0 && (
          <div className="glass-card" style={{
            textAlign: 'center',
            padding: '3rem 2rem'
          }}>
            <h3 className="heading-3">No listings found</h3>
            <p style={{
              color: 'var(--text-secondary)',
              marginBottom: '2rem'
            }}>
              {search 
                ? `We couldn't find any listings matching "${search}". Try adjusting your search terms.`
                : "There are currently no active listings. Check back later or be the first to create one!"}
            </p>
            <a 
              href="/sell" 
              className="glass-button glass-button-primary"
              style={{ textDecoration: 'none' }}
            >
              Create Listing
            </a>
          </div>
        )}
      </div>
    </>
  );
};

Listings.getInitialProps = async ({ query }, client) => {
  const { data } = await client.get(
    `/api/listings?search=${query.search || ''}`
  );

  return { listings: data || [], search: query.search };
};

export default Listings;
