package bootstrap

import (
	"context"
	"log/slog"

	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/yugaumemura/atoikura/apps/api/internal/shared/config"
	"github.com/yugaumemura/atoikura/apps/api/internal/shared/db"
	"github.com/yugaumemura/atoikura/apps/api/internal/shared/logger"
)

type App struct {
	Config *config.Config
	Logger *slog.Logger
	DB     *pgxpool.Pool
}

func New(ctx context.Context) (*App, error) {
	cfg, err := config.Load()
	if err != nil {
		return nil, err
	}

	log := logger.New()

	pool, err := db.NewPool(ctx, cfg.DatabaseURL)
	if err != nil {
		return nil, err
	}

	return &App{
		Config: cfg,
		Logger: log,
		DB:     pool,
	}, nil
}
