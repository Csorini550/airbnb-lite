"""empty message

Revision ID: 16ffd4103bfc
Revises: be92a00c6d4b
Create Date: 2021-01-31 16:25:30.437374

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '16ffd4103bfc'
down_revision = 'be92a00c6d4b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('favorites')
    op.add_column('reviews', sa.Column('title', sa.String(length=76), nullable=True))
    op.add_column('venues', sa.Column('city', sa.String(), nullable=False))
    op.add_column('venues', sa.Column('state', sa.String(), nullable=False))
    op.add_column('venues', sa.Column('street_address', sa.String(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('venues', 'street_address')
    op.drop_column('venues', 'state')
    op.drop_column('venues', 'city')
    op.drop_column('reviews', 'title')
    op.create_table('favorites',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('user_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('venue_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name='favorites_user_id_fkey'),
    sa.ForeignKeyConstraint(['venue_id'], ['venues.id'], name='favorites_venue_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='favorites_pkey')
    )
    # ### end Alembic commands ###
