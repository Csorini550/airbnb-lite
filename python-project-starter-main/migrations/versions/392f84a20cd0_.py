"""empty message

Revision ID: 392f84a20cd0
Revises: 6c8931e1cde4
Create Date: 2021-01-30 14:32:53.697597

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '392f84a20cd0'
down_revision = '6c8931e1cde4'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('venues', sa.Column('city', sa.String(), nullable=False))
    op.add_column('venues', sa.Column('owner_id', sa.Integer(), nullable=False))
    op.add_column('venues', sa.Column('state', sa.String(), nullable=False))
    op.add_column('venues', sa.Column('street_address', sa.String(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('venues', 'street_address')
    op.drop_column('venues', 'state')
    op.drop_column('venues', 'owner_id')
    op.drop_column('venues', 'city')
    # ### end Alembic commands ###
